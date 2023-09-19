### **Select2Prompt**

![2023-09-19 10-29-01 (online-video-cutter com)](https://github.com/barisx/Select2Prompt/assets/58127640/216945c9-df4d-475f-befd-87be94f46283)


#### **Description**

**Select2Prompt** is a Chrome extension designed to enhance the productivity of developers and prompt engineers by facilitating a seamless text transfer process. With this extension, any text selected on a webpage is automatically added to a designated textarea, followed by a focus shift to the last line of the input, ready for your next entry.

#### **Features**

- **Instant Text Transfer**: Automatically transfers your selected text to the specified textarea.
- **Auto Focus**: After the transfer, the focus shifts to the last line of the textarea, ready for your next input.
- **New Line Character**: Each transferred text entry is followed by a newline character, helping you maintain a clean and organized input area.

#### **How to Use**

1. **Install the Extension**: Download and install the extension from the repository.
2. **Select Text**: Simply select the text you want to transfer on any webpage.
3. **Automatic Transfer**: The selected text will automatically appear in the textarea with the ID `prompt-textarea`.
4. **Ready to Input**: The focus will shift to the last line of the textarea, ready for your next entry.

#### **Setup**

To set up the textarea to receive the transferred text, add a textarea element with the ID `prompt-textarea` to your webpage:

```html
<textarea id="prompt-textarea"></textarea>
```

#### **Installation**

To install the extension, follow these steps:

1. Clone or download the repository to your local system.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable `Developer mode`.
4. Click on `Load unpacked` and select the folder containing the extension files.
5. The extension is now installed and ready to use.

#### **Contribution**

Feel free to contribute to this project by reporting issues or submitting pull requests. Your feedback and contributions are highly appreciated.
