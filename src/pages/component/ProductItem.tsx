import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  useDisclosure,
} from "@nextui-org/react";

export default function ProductItem(product: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openContent, SetOpenContent] = useState({} as any);

  const handleOpen = (product: any) => {
    onOpen();
    SetOpenContent(product);
  };

  return (
    <>
      <div
        className="rounded-xl m-2 bg-[#29b6f6] shadow-xl"
        onClick={() => handleOpen(product?.product)}
      >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={
            product?.product?.image
              ? product?.product?.image
              : "https://static5.depositphotos.com/1032932/423/i/950/depositphotos_4231002-stock-photo-studio-shot-of-a-fish.jpg"
          }
          width={270}
        />
        <p className="font-bold text-large text-center mx-auto p-2 overflow-hidden text-ellipsis truncate">
          {product?.product?.id}.
          {product?.product?.name ? product?.product?.name : "Our Product"}
        </p>
      </div>
      <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        className="bg-[#29b6f6]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={
                    openContent?.image
                      ? openContent?.image
                      : "https://static5.depositphotos.com/1032932/423/i/950/depositphotos_4231002-stock-photo-studio-shot-of-a-fish.jpg"
                  }
                />
              </ModalBody>
              <p className="font-bold text-center">{openContent?.name}</p>

              <ModalFooter>
                <Button
                  className="sm:visible lg:hidden"
                  color="danger"
                  variant="solid"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
