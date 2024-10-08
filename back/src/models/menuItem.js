import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    depth: {
        type: Number,
        required: true,
        trim: true,
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
        default: null,
        trim: true,
    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem'
    }]
}, {
    timestamps: true
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;