# WordPress-assessment
I made the solution using both the shortcode and block approach. For inserting the block, is needed to use the block editor for the page/post. To do it click on add a block, and find the name of the block which is "Otávio Serra Plugin Form" located in the widget category, or search for this text on the block's search box. Moreover, I created the shortcode version for the same block. For use is needed to create a new shortcode and inform the name of the shortcode as [otavio_serra_block]. I pushed all my work here in this repository, and tomorrow I'll finish what's needed to finish all the assessments. 
## What is missing 
I think that the main problem was solved today after a lot of time spent in the last 3 days trying to find fixes with conflicts on WordPress, React, and TailwindCSS. I believe that I made **90%** of all the solutions I thought. I need only more one day to finish all the solutions I projected. The list of remaining topics is:
* Validate data in the front end and AJAX connections to store data: **DONE**.
* RESTAPI routes and controllers to store form data sent.
* Validate data in the backend and store it in the database.
* Admin page to get data from the database and build one table to store all data: **DONE**.
* Update language and framework source from database: **DONE**.
* Get language and framework data from the database using the REST API route and controller to compute it: **DONE**.
* API external connection to fetch data from third-party API (e.g., Gravatar).
* PLUS: Internacionalization of string using poedit and i18n functions.
* PLUS: Add unit tests to validate the plugin’s functionality.
## Troubleshooting
* I faced a lot of problems with TailwindCSS with WordPress default CSS on Sunday. I worked before with TailwindCSS in one React App with no problem, but not in WordPress. I tried a lot of alternatives to not impact CSS WordPress behavior, but with not much time I preferred to leave the TailwindCSS approach and that is why I using Vanilla CSS based on the classes from TailwindCSS. With more time I can adapt my solution to use again this CSS framework, and not impacting CSS WordPress defaults.
* I faced a lot of problems with the latest version of @wordpress/wp-scripts which throws one error of JSX when built on Monday and Tuesday. After a lot of time trying to solve the problem using a lot of other strategies, I finally found what is going on here: https://github.com/WordPress/gutenberg/issues/62202 . So, I downgrade @wordpress/wp-scripts@latest to @wordpress/scripts@26.10.0 and success build.
* Using shortcode and block on the same page/post has problems rendering and duplicating the form. It's not from requirements to both work together, but with more time I can fix it and make one solution to work with both on the same page/post.