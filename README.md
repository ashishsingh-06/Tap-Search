# Tap-Search
TapSearch a simple app which takes in multiple paragraphs of text, assigns a unique ID To each paragraph and stores 
the words to paragraph mappings on an inverted index and when given a word to search for it list outs the paragraph 
in which word is present 

# View project
http://tap-search-app.herokuapp.com/

# How to use locally
1. clone or download this project
2. go to the project folder and open a terminal
3. type 'npm install'
4. to run -> type 'node server.js'

# Functionality
This project takes in multiple paragraphs and when searched for a word, returns the paragraphs in which word is present. It uses inverted
index mapping to map paragraphs.

# Scope
This project can be devloped further by optimizing the mapping algorithm, it can be made into a full fledged word finder.

# Sample input
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Magna ac placerat vestibulum lectus. Elit duis tristique sollicitudin nibh sit amet commodo. Senectus et netus et malesuada fames. 
Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. 
Aliquam ut porttitor leo a diam sollicitudin tempor. Consectetur a erat nam at lectus urna duis convallis. 
Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. 



Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Lectus sit amet est placerat in egestas erat imperdiet. 
Ante in nibh mauris cursus mattis. Tellus rutrum tellus pellentesque eu tincidunt. Euismod quis viverra nibh cras pulvinar mattis. 
Proin nibh nisl condimentum id venenatis a. Quam elementum pulvinar etiam non quam. Arcu dictum varius duis at consectetur lorem donec. 
Aliquet porttitor lacus luctus accumsan tortor. Duis ut diam quam nulla porttitor massa id.

# Sample search
input 1 -> Lorem 
input 2 -> Maecenas

# Sample output
input 1 -> returns both paragraphs.
input 2 -> returns the second paragraph.
