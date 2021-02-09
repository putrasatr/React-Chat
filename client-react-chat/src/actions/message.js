//--------------POST CHAT-------------------
export const addChatSuccess = (data) => ({
    type: 'ADD_CHAT_SUCCESS',
    data
})

export const addChatFailure = (id) => ({
    type: 'ADD_CHAT_FAILURE',
    id
})

export const addChatView = (id, sender, message) => ({
    type: 'ADD_CHAT',
    id, 
    sender, 
    message
})

export const postChat = (sender, message) => ({
   type:"POST_CHAT",
   sender,
   message
})
//-----------------------------------------


//--------------LOAD CHAT-------------------
export const loadChatSuccess = (data) => ({
    type: 'LOAD_CHAT_SUCCESS',
    data
})

export const loadChatFailure = () => ({
    type: 'LOAD_CHAT_FAILURE'
})

export const loadChat = () => ({
   type:"LOAD_CHAT"
})
//-------------------------------------------


//--------------DELETE CHAT-------------------
export const deleteChatSuccess = (data) => ({
    type: 'DELETE_CHAT_SUCCESS',
    data
})

export const deleteChatFailure = () => ({
    type: 'DELETE_CHAT_FAILURE'
})

export const deleteChatView = (id) => ({
    type: 'DELETE_CHAT',
    id
})

export const deleteChat = (id) => ({
    type:"TRASH_CHAT",
    id
})
//-------------------------------------------



//--------------RESEND CHAT-------------------
export const resendChat = (id, sender, message) => ({
    type: "RESEND_CHAT",
    id,sender,message
})
//-------------------------------------------
