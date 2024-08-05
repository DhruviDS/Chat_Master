// import { useContext, useEffect, useState } from "react";
// import { Box } from "@mui/material";

// import { AccountContext } from "../../../context/AccountProvider";

// import { getConversation } from "../../../service/api";

// //components
// import ChatHeader from "./ChatHeader";
// import Messages from "./Messages";

// const ChatBox = () => {

//   const { person, account } = useContext(AccountContext);
//   const [conversation, setConversation] = useState({});



//   useEffect(() => {
//     const getConversationDetails = async () => {
//         let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
//         setConversation(data);
//     }
//     getConversationDetails();
// }, [person.sub]);

//   return(
//     <Box style = {{height: '75%'}}>
//       <ChatHeader person={person} />
//       <Messages person={person} conversation={conversation} />
//     </Box>
//   )
// }
// export default ChatBox;

import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";

import { getConversation } from "../../../service/api";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <Box style={{ height: '75%' }}>
      <ChatHeader person={person} onSearch={setSearchQuery} /> {/* Pass setSearchQuery to ChatHeader */}
      <Messages person={person} conversation={conversation} searchQuery={searchQuery} /> {/* Pass searchQuery to Messages */}
    </Box>
  );
};

export default ChatBox;
