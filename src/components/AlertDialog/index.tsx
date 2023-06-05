import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
} from './styles';
import { Button } from '../Buttons/Button';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  cancelButtonContent: string;
  confirmButtonContent: string;
  onConfirm: () => void;
  onCancel: () => void;
}
export const Dialog: React.FC<DialogProps> = ({
  open,
  title,
  description,
  cancelButtonContent,
  confirmButtonContent,
  onOpenChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant='gray-100' onClick={onCancel}>
                {cancelButtonContent}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="primary" onClick={onConfirm}>
                {confirmButtonContent}
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
