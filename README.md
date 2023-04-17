# mtm6302-capstone-guru0026
Hari's Capstone Project for IMD Web Development III

Name: Hari Gurusubramanian
Student Number: 041048161
Project Selected: "Astronomy Picture of the Day Search"

*PART-4*

COMPLETION REPORT:

Resources used were:
1. NASA's APOD API documentation section,
2. Unsplash.com for default stock images which load on the website before a date is selected for accessing the API server.
3. Audiowide and Jura fonts from google fonts

Challenges faced:

The biggest challenge was making the transition from a static HTML and CSS-dependent site to a dynamic one which used javascript. All dynamic elements which were loaded from NASA's API had to be restyled on javascript instead of on css. Targeting an element in order to style it required the entire breadth of knowledge gained in Web Dev III. This was especially tricky to treat images which were added and had to follow the pattern of the grid.

Another challenge was accessing the data from the API itself. Using the API Key as an object which is inserted in the main url, and then using json format to convert the data received from the API so that it can be displayed on the website required a lot of reading up, trials, and many attempts.

A minor challenge was in saving the data to the localstorage by stringifying it, and accessing it again on opening by parsing it.

The overall process required a lot of back-and-forth between JS and HTML so that the website behaved like it should, then back-and-forth between JS and CSS so that it appeared like it should.

This was a learning experience and I'm hoping that I can streamline the entire process so that less double-work, trial-and-error and repetition is required next time.

*PART-3*

The colour palette for this design consists of five main colours:
    #003E9B: Blue as derived from NASA's official logo. This serves as a secondary colour.
    #EF171D: Red as derived from NASA's official logo. This serves as an alternate secondary colour.
    #000000: True Black to represent the vacuum of outer space. This is the main background for most pages.
    #BEBEC3: Grey as derived from images of NASA's space shuttle. It also represents the moon, significant as the first landing site of any spaceship sent by NASA. This serves as the default text body colour.
    #FFBB00: Gold/Yellow, as derived from images of the foil around the first lunar capsule, and also the reflection of the sun against the solar panels  mounted on satellites. This serves as a highlight meant to indicate important elements which are either links or interactive in some way.

Rounded edges were used for most elements in the design as a reference to the aerodynamic forms of spaceships. It also gives the elements a soft, clean, contemporary aesthetic.

Borders were used to help define content better when the background merged with the content. The lineweights of these borders was deliberately kept thin to give a sense of weightlessness, like something floating in space.

A banner at the top shows the latest images by the James Webb Telescope as a slideshow which keeps running.


One key element in the page is the date selector, which almost acts like a dial where the numbers can be set manually. The numbers for the dial are contained in blue boxes, which represent the windows of the space shuttle. It is almost like a window which peaks into the past, an appropriate reference for a selector which chooses dates.

There is also a horizontal slider in case the user wants to just scroll across a span of time without setting the date manually.

Depending on the date selected, one main image shows up with a brief text descriptions next to it. A link titled "read more" takes the user to a separate page with an in-depth article on the photograph. There are three buttons below the main image which allow the user to download the image, add the image to their favorites collection and share the image with others.

Below the main image section, there is a gallery of some other images in case the user wants suggestions for looking at more images. This is only a preview gallery and not the entire collection of images for all years which is on a separate page.

The header highlights the active page inside a yellow box, while the links for all other pages are in grey. A search bar helps the user navigate the site if required.

The footer has links to policy related documents as well as social media accounts.

The fonts used were Audiowide for the headers because of how it complements the existing NASA "worm" font, and Jura for the body text because of how it complements Audiowide and is also legible.