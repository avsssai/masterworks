"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <button ref={btnRef} onClick={onOpen} className="">
        <AlignRight />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-primary text-white">
          <DrawerCloseButton />
          <DrawerHeader>
            <p className="font-primary mb-16 uppercase text-sm">Art gallery</p>
          </DrawerHeader>

          <DrawerBody>
            <nav>
              <ul>
                <Link href={"/artists"}>
                  <li className="text-6xl leading-9 mb-4 md:text-9xl md:leading-[6rem] hover:underline md:mb-2">
                    Artists
                  </li>
                </Link>
                <Link href={"/paintings"}>
                  <li className="text-6xl leading-9 mb-4 md:text-9xl md:leading-[6rem] hover:underline md:mb-2">
                    Paintings
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li className="text-6xl leading-9 mb-4 md:text-9xl md:leading-[6rem] hover:underline md:mb-2">
                    About
                  </li>
                </Link>
                <Link href="/gallery">
                  <li className="text-6xl leading-9 mb-4 md:text-9xl md:leading-[6rem] hover:underline md:mb-2">
                    Gallery
                  </li>
                </Link>
              </ul>
            </nav>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
