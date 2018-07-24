[![CircleCI](https://circleci.com/gh/dmngu9/qwilr-project.svg?style=svg)](https://circleci.com/gh/dmngu9/qwilr-project)

# Qwilr Project

*Install Dependencies* 

`yarn install`

This also run the post install process which builds the project. After that, start the server by:

`yarn start`

Go to localhost:8000 and try the app. It actually might not work because the key to database is not included in the repo. It is best to try out the [production instance](https://qwilr-project.herokuapp.com/)

*Storybook*

`yarn storybook`

It should be on port 9000.


**Things I have not done well**
+ Storybook addons is broken. When I set up the repo, it was working. I could not figure out the reasons
+ Some parts of the code can be refactor. Currently, there are some duplicated code especially in front end. Extract them to common components or with higher order components
+ Handling epics is not done properly and very fragile
+ No tests because there is no time
+ svg cannot be loaded with webpack even though react-svg-loader is used
+ client and server are in the same repo. I am not a fan of this but since the project is small enough to put them all together.
+ Dashboard page does not look good on mobile
+ Atlaskit input component with type="number" always expect step size of 1. So no float number is accpeted. Just realized that, otherwise I can just use barebone html input tag with custom step size.
+ No logo, favicon, page title, footer
