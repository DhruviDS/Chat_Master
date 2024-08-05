// import { useContext } from 'react';

// import { Box, Typography, styled } from '@mui/material';
// import { Search, MoreVert } from '@mui/icons-material';

// import { AccountContext } from '../../../context/AccountProvider';
// import { defaultProfilePicture } from '../../../constants/data';

// const Header = styled(Box)`
//     height: 44px;
//     background: #ededed;
//     display: flex;
//     padding: 8px 16px;
//     align-items: center;
// `;
    
// const Image = styled('img')({
//     width: 40,
//     height: 40,
//     objectFit: 'cover',
//     borderRadius: '50%'
// })

// const Name = styled(Typography)`
//     margin-left: 12px !important;
// `;

// const RightContainer = styled(Box)`
//     margin-left: auto;
//     & > svg {
//         padding: 8px;
//         font-size: 22px;
//         color: #000;
//     }
// `;

// const Status = styled(Typography)`
//     font-size: 12px !important;
//     color: rgb(0, 0, 0, 0.6);
//     margin-left: 12px !important;
// `;

// const ChatHeader = ({ person }) => {  

//     const url = person.picture || defaultProfilePicture;
    
//     const { activeUsers } = useContext(AccountContext);

//     return (
//         <Header>
//             <Image src={url} alt="display picture" />     
//             <Box>
//                 <Name>{person.name}</Name>
//                 <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>    
//             </Box>   
//             <RightContainer>
//                 <Search />
//                 <MoreVert />    
//             </RightContainer> 
//         </Header>
//     )
// }

// export default ChatHeader;

import React, { useContext, useState } from 'react';
import { Box, Typography, styled, InputBase, IconButton } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import { AccountContext } from '../../../context/AccountProvider';
import { defaultProfilePicture } from '../../../constants/data';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    display: flex;
    align-items: center;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const SearchContainer = styled(Box)`
    background: #f0f0f0;
    display: flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 16px;
    margin-right: 8px;
`;

const StyledInputBase = styled(InputBase)`
    margin-left: 8px;
    flex: 1;
`;

const ChatHeader = ({ person, onSearch }) => {
    const { activeUsers } = useContext(AccountContext);
    const [searchText, setSearchText] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const url = person.picture || defaultProfilePicture;

    const handleSearchChange = (event) => {
        const text = event.target.value;
        setSearchText(text);
        onSearch(text);
    };

    const handleSearchIconClick = () => {
        setShowSearch(!showSearch);
    };

    return (
        <Header>
            <Image src={url} alt="display picture" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
            </Box>
            <RightContainer>
                {showSearch && (
                    <SearchContainer>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </SearchContainer>
                )}
                <IconButton onClick={handleSearchIconClick}>
                    <Search />
                </IconButton>
                <MoreVert />
            </RightContainer>
        </Header>
    );
};

export default ChatHeader;
