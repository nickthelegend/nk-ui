interface Bank {
    id: string;
    name: string;
    logo?: string;
}
interface BankTransferFormProps {
    banks: Bank[];
    balance?: string;
    token?: string;
    onSend?: (data: {
        accountNumber: string;
        bank: Bank;
        amount: string;
    }) => void;
}
export declare function BankTransferForm({ banks, balance, token, onSend }: BankTransferFormProps): any;
export {};
//# sourceMappingURL=bank-transfer-form.d.ts.map