# BookWorm

![Thumbnail for BookWorm](https://github.com/ltann/BookWorm/blob/master/bookworm.png?raw=true)

BookWorm is a Chrome Extension, written using Javascript, CSS, and HTML, that is used to implement features for active reading. After being set off by a pop-up that appears, the extension goes through phases that censor parts of the text and summarize passages, for example. This allows the user to go through a more efficient process of looking at a passage and understanding the main points. Overall, the importance of his project lies in how it can assist those with learning disabilities. While it may initially be overwhelming to see [seemingly] endless paragraphs of text, BookWorm breaks them down to provide you with a more user-friendly, understandable series of text. <br>
<br>
In order to run this extension, all the files of code that are included in this repository can be downloaded into the same repository on your machine. Then, by accessing chrome://extensions on the browser (making sure "Developer Mode" in the top right is toggled on),
they can be used in the Chrome extensions menu by pressing "Load unpacked" and selecting the directory that the files are located in (on your machine). Finally, the extension will be executeable in your browser to be used on webpages that are accessed thereafter. <br>


## Future Implementations and Goals:

### Objective: BookWorm is an extension helping student study more effectively by creating distraction free, interactive webpages with a portfolio homepage organizer to allow student manage their research data.

- Active Reading mode that changes the layout of the web pages by editing its format into a more active readable content which also contains a dropdown summary of each paragraph. (*This allows the student to actually interact with their source and webpages resulting to more productive research and better retention of information.*)

- A keyword section that holds relevant key terms that the user decides to keep and have those words be automatically searched for its definition.

- Tags: can tag keywords in websites when tag mode is activated. Allows student to link and correlate the keywords with the subject they are researching about as well as allows relevant webpages to be searched at the bottom. Tags will be saved in portfolio album where webpage is if created.

- At the bottom of the webpage will be a section that contains other relevant websites based on the tags highlighted by the user. Don’t open a webpage twice if already opened (arrow pointed up at the bottom to show more relevant website pictures, scroll through to see the relevant next ones.)

- Deleting elements of the page that you don't want.

- Fullscreen Mode

- Comment/Note sections (like google Docs comment) that can note down highlighted sections and allow you to make comments on them. Comments and highlighted text will remain when the user returns to the webpages.

- Distraction free mode which sets all the fonts to the same font style for any webpage that you choose. (automatic)

- **portfolio homepage** that is customizable, holds albums of webpages that users would like to save. The homepage also has the functionality of maintaing user keywords and highlighted notes from the past 24hours so that when the user returns to it, they can refresh their memory with the key terms they highlighted as well as the notes and websites that they last placed and went to(along with link to the webpage). The homepage contains also a todo list of the key things you need to do or questions you feel like should be answered. 

- Sessions: when a new tab is created on a separate window, the user can name the project folder and any tabs created there and searched will automatically go to the album of that project in the portfolio homepage. User can undo this with a hotkey/button.

- When browser opens, the webpage will keep the tags you last created and then browser can ask you if you want to search base on those tags, then shows reevant websites based on tags.

- Search History (for each project/album in Portfolio): you can order history search by tags, number of clicks, time spent on webpages, latest clicked on etc.

- Suggest pages to continue your research when u look into an album.


- NOTE: the portfolio homepage can be replaced with the newtab. This implementation would require a web-server
