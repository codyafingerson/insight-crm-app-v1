import mongoose, { Document, Schema } from "mongoose";

export interface CustomerDocument extends Document {
    status: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    companyName?: string;
    companyAddress?: string;
    companyPhoneNumber?: string;
    orders?: string[];
    notes?: string[];
}

const customerSchema: Schema<CustomerDocument> = new Schema<CustomerDocument>({
    status: {type: String, enum: ['active', 'inactive'], default: 'active' },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    companyName: { type: String },
    companyAddress: { type: String },
    companyPhoneNumber: { type: String },
    orders: { type: [String], default: [] },
    notes: { type: [String], default: [] }
}, {
    timestamps: true
});

export default mongoose.models.Customer || mongoose.model("Customer", customerSchema); 