interface ConfirmRow {
    label: string;
    value: string;
    highlight?: boolean;
}
interface ConfirmSheetProps {
    visible: boolean;
    title?: string;
    rows: ConfirmRow[];
    onConfirm: () => void;
    onClose: () => void;
    confirmLabel?: string;
    loading?: boolean;
    poweredBy?: string;
}
export declare function ConfirmSheet({ visible, title, rows, onConfirm, onClose, confirmLabel, loading, poweredBy, }: ConfirmSheetProps): any;
export {};
//# sourceMappingURL=confirm-sheet.d.ts.map