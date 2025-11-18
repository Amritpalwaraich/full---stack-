class MessageController {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }

    async sendMessage(req, res) {
        const { sender, receiver, content } = req.body;
        try {
            const message = new this.messageModel({ sender, receiver, content });
            await message.save();
            res.status(201).json({ message: 'Message sent successfully', data: message });
        } catch (error) {
            res.status(500).json({ message: 'Error sending message', error: error.message });
        }
    }

    async getMessages(req, res) {
        const { userId } = req.params;
        try {
            const messages = await this.messageModel.find({
                $or: [{ sender: userId }, { receiver: userId }]
            });
            res.status(200).json({ messages });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving messages', error: error.message });
        }
    }
}

//working hard in starting years are all wise tough but worth

export default MessageController;