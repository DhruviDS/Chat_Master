import { useEffect, useState } from 'react';
import { EmojiEmotions, AttachFile, Mic } from '@mui/icons-material';
import { Box, styled, InputBase, IconButton } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import { uploadFile } from '../../../service/api';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    position: relative;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`;

const EmojiPickerContainer = styled(Box)`
    position: absolute;
    bottom: 60px;
    left: 0;
    z-index: 1000;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
`;

const Footer = ({ sendText, value, setValue, setFile, file, setImage }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                try {
                    const response = await uploadFile(data);
                    console.log("Upload response:", response); // Debug line
                    setImage(response.data);
                } catch (error) {
                    console.error("Error uploading file:", error); // Debug line
                }
            }
        };
        getImage();
    }, [file, setImage]);

    const onFileChange = (e) => {
        setValue(e.target.files[0].name);
        setFile(e.target.files[0]);
    };

    const onEmojiClick = (emojiObject, e) => {
        if (emojiObject && emojiObject.emoji) {
            console.log("Current value before emoji addition:", value); // Debug line
            setValue(prevValue => {
                const newValue = prevValue + emojiObject.emoji;
                console.log("New value after emoji addition:", newValue); // Debug line
                return newValue;
            });
        }
    };

    return (
        <Container>
            <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <EmojiEmotions />
            </IconButton>
            {showEmojiPicker && (
                <EmojiPickerContainer>
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                </EmojiPickerContainer>
            )}
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={onFileChange}
            />

            <Search>
                <InputField
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') sendText(e);
                    }}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    );
};

export default Footer;

