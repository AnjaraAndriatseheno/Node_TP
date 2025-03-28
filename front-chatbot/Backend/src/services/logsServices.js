import Message from '../models/message.js'


export const getLogs = async (req, res) => {
    const logsLists = await Message.find();
    res.send(logsLists);
}

export const deleteLogs = async (req, res) => {
    try{
        const delLogs = await Message.findByIdAndDelete(req.params.id);
        if(!delLogs){
            return res.status(404).json({message: "Logs non trouvé"})
        }
        res.status(204).end();
    }catch(error){
        res.status(500).json({message: 'Erreur serveur', error})
    }
}