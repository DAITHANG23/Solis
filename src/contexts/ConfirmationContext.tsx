import ConfirmDialog from "@/libs/shared/ConfirmDialog/ConfirmDialog";
import { StyledComponentProps } from "@mui/material";
import { createContext, useCallback, useState } from "react";

export interface ConfirmationData extends StyledComponentProps {
  title?: string | React.ReactNode;
  description?: React.ReactNode;
  onConfirm?: () => void;
  confirmLabel: string;
  isShowCloseButton?: boolean;
  onClose?: () => void;
  closeLabel?: string;
  helperText?: string;
  require?: boolean;
  isShowRemark?: boolean;
  onRenderTitle?: () => React.ReactNode;
  width?: string | number;
  remarkLabel?: string;
}
export interface ConfirmDialogContextData {
  showConfirmation: (data: ConfirmationData) => void;
}

export const ConfirmDialogContext = createContext<ConfirmDialogContextData>({
  showConfirmation: () => {},
});

export interface ConfirmDialogProviderProps {
  children: React.ReactNode;
}

const ConfirmDialogProvider = ({ children }: ConfirmDialogProviderProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>();
  const [modalData, setData] = useState<ConfirmationData>({
    title: "",
    description: "",
    confirmLabel: "Confirm",
    closeLabel: "Close",
    require: false,
  });

  const {
    isShowCloseButton = true,
    title,
    description,
    onClose,
    onConfirm,
    confirmLabel,
    closeLabel,
    // helperText,
    // require,
    // isShowRemark,
    onRenderTitle,
    // width,
    // remarkLabel,
    // classes,
  } = modalData;

  const handleShowConfirmation = useCallback((data: ConfirmationData) => {
    const { onClose: onInternalClose, onConfirm: onInternalConfirm } = data;

    const handleClose = () => {
      setOpen(false);
      setLoading(false);
      if (onInternalClose) {
        onInternalClose();
      }
    };
    const handleConfirm = async () => {
      if (onInternalConfirm) {
        setLoading(true);
        onInternalConfirm();
        setLoading(false);
        setOpen(false);
      }
    };

    setOpen(true);
    setData({
      ...data,
      onClose: handleClose,
      onConfirm: handleConfirm,
    });
  }, []);
  return (
    <>
      <ConfirmDialogContext.Provider
        value={{ showConfirmation: handleShowConfirmation }}
      >
        {children}
      </ConfirmDialogContext.Provider>
      {open && (
        <ConfirmDialog
          title={title}
          onRenderTitle={onRenderTitle}
          confirmLabel={confirmLabel}
          isShowCloseButton={isShowCloseButton}
          loading={loading}
          description={description}
          onClose={onClose}
          onConfirm={onConfirm}
          open={open}
          setOpen={setOpen}
          closeLabel={closeLabel}
        />
      )}
    </>
  );
};

export default ConfirmDialogProvider;
