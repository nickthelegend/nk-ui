interface Bank {
    id: string;
    name: string;
    logo?: string;
    color?: string;
}
interface SelectBankSheetProps {
    visible: boolean;
    banks: Bank[];
    onSelect: (bank: Bank) => void;
    onClose: () => void;
}
export declare function SelectBankSheet({ visible, banks, onSelect, onClose }: SelectBankSheetProps): any;
export {};
//# sourceMappingURL=select-bank-sheet.d.ts.map