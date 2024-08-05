// import { useContext, useEffect, useState } from "react";
// import { Box, Typography, styled } from "@mui/material";

// import { AccountContext } from "../../../context/AccountProvider";

// import { formatDate } from "../../../utils/common-utils";
// //api
// import { setConversation, getConversation } from "../../../service/api";

// //css

// const Component = styled(Box)`
//     height: 45px;
//     display: flex;
//     padding: 13px 0;
//     cursor: pointer;
// `;
    
// const Image = styled('img') ({
//     width: 50,
//     height: 50,
//     objectFit: 'cover',
//     borderRadius: '50%',
//     padding: '0 14px'
// });

// const Container = styled(Box)`
//     display: flex;
// `;

// const Timestamp = styled(Typography)`
//     font-size: 12px;
//     margin-left: auto;
//     color: #00000099;
//     margin-right: 20px;
// `;

// const Text = styled(Typography)`
//     display: block;
//     color: rgba(0, 0, 0, 0.6);
//     font-size: 14px;
// `;


// const Conversation = ({user}) =>{

//   const {setPerson, account, newMessageFlag} = useContext(AccountContext);
//   const[message, setMessage] = useState({});

//   useEffect(() => {
//     const getConversationDetails = async() => {
//         const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
//         setMessage({ text: data?.message, timestamp: data?.updatedAt });
//     }
//     getConversationDetails();
// }, [newMessageFlag]);

//   const getUser = async () => {
//     setPerson(user);
//     await setConversation({ senderId: account.sub, receiverId: user.sub });
    
// }

//   return(
//     <Component onClick={() => getUser()}>
//       <Box>
//         <Image src={user.picture} alt="display picture" />
//       </Box>
//       <Box style ={{width:'100%'}}>
//         <Container>
//           <Typography>{user.name}</Typography>
//           { 
//                         message?.text && 
//                         <Timestamp>{formatDate(message?.timestamp)}</Timestamp>        
//                     }
//         </Container>
//         <Box>
//                     <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
//           </Box>
//       </Box>
//     </Component>
//   )
// }

// export default Conversation;

import { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { formatDate } from "../../../utils/common-utils";
import { setConversation, getConversation } from "../../../service/api";

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Conversation = ({user}) => {
    const { setPerson, account, newMessageFlag } = useContext(AccountContext);
    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            if (data) {
                setMessage({ text: data.message, timestamp: data.updatedAt });
            }
        };
        getConversationDetails();
    }, [newMessageFlag, account.sub, user.sub]);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    };

    return (
        <Component onClick={getUser}>
            <Box>
                <Image src={user.picture} alt="display picture" />
            </Box>
            <Box style={{ width: '100%' }}>
                <Container>
                    <Typography>{user.name}</Typography>
                    {message?.text && (
                        <Timestamp>{formatDate(message.timestamp)}</Timestamp>
                    )}
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text || ''}</Text>
                </Box>
            </Box>
        </Component>
    );
};

export default Conversation;
