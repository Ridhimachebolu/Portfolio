"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import {
  Calculator,
  Calendar,
  House,
  Contact,
  MailPlus,
  User,
  Link as LinkIcon,
  CircleUser,
  Lightbulb,
  Laptop,
} from "lucide-react";
import { toast } from "sonner";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function CommandBox({ children }) {
  const [open, setOpen] = React.useState(false);
  const [isGPressed, setIsGPressed] = React.useState(false);
  const router = useRouter();

  // Mapping G + Key combinations to routes
  const navigationMap = {
    a: "/about",
    h: "/",
    // p: "/projects",
    u: "/uses",
  };

  // Function to handle navigation
  const handleNavigation = React.useCallback(
    (key) => {
      if (navigationMap[key]) {
        console.log(`Navigate to ${navigationMap[key]}`);
        setOpen(false);
        router.push(navigationMap[key]);
      }
    },
    [router]
  );

  // Function to handle single key actions
  const handleSingleKeyAction = React.useCallback(
    (key) => {
      switch (key.toLowerCase()) {
        case "l":
          const linkToCopy = "https://www.linkedin.com/in/dheerajnaguru/"; // Replace with your actual link
          navigator.clipboard
            .writeText(linkToCopy)
            .then(() => {
              toast("Portfolio Link Copied Successfully!", {
                description: "You can now share it.",
                type: "success",
              });
            })
            .catch((err) => {
              toast("Failed to copy link", {
                description: "Please try again.",
                type: "error",
              });
              console.error("Error copying to clipboard: ", err);
            });
          setOpen(false);
          break;
        case "e":
          if (typeof window !== "undefined") {
            window.location.href = "mailto:dheerajnaguru@gmail.com"; // Replace with your email
          }
          break;
        default:
          break;
      }
    },
    [router]
  );

  // Key event handlers
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (open) {
        // If the command box is open, only allow click actions, not keyboard shortcuts
        return;
      }

      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "g") {
        setIsGPressed(true); // Mark "G" as pressed
      } else if (isGPressed && navigationMap[e.key]) {
        e.preventDefault();
        handleNavigation(e.key); // Handle G + Key action
      } else if (!isGPressed) {
        handleSingleKeyAction(e.key); // Handle single key action
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "g") {
        setIsGPressed(false); // Reset "G" when released
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleNavigation, handleSingleKeyAction, isGPressed, open]);

  return (
    <>
      {children}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <DialogTitle />
        <DialogDescription />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="GENERAL" className="mt-3">
            <CommandItem onSelect={() => handleSingleKeyAction("l")}>
              <LinkIcon />
              <span>Copy Link</span>
              <CommandShortcut>
                <span className="bg-[#121212] p-2 rounded">L</span>
              </CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => handleSingleKeyAction("e")}>
              <MailPlus />
              <span>Send Email</span>
              <CommandShortcut>
                <span className="bg-[#121212] p-2 rounded">E</span>
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="GO TO" className="mt-3">
            {Object.entries(navigationMap).map(([key, path]) => (
              <CommandItem key={key} onSelect={() => handleNavigation(key)}>
                {key === "h" && <House />}
                {key === "a" && <CircleUser />}
                {/* {key === "p" && <Lightbulb />} */}
                {key === "u" && <Laptop />}
                <span>
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.replace("/", "").slice(1).toLowerCase()}
                </span>

                <CommandShortcut>
                  <span className="bg-[#121212] p-2 rounded mr-2">G</span>
                  <span className="bg-[#121212] p-2 rounded">
                    {key.toUpperCase()}
                  </span>
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
