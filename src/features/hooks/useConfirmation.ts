import {
  ConfirmationData,
  ConfirmDialogContext,
} from "@/contexts/ConfirmationContext";
import { useCallback, useContext } from "react";

export default function useConfirmation() {
  const { showConfirmation } = useContext(ConfirmDialogContext);

  const handleShowConfirmation = useCallback(
    (data: ConfirmationData) => {
      showConfirmation(data);
    },
    [showConfirmation]
  );

  return handleShowConfirmation;
}
