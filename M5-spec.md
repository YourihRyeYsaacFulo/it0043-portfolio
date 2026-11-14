M5 Specification

1. Navigation Toggle
   -Trigger: User clicks the menu button.
   -DOM Change: Navigation menu shows or hides.
   -Edge Cases: Repeated clicks, keyboard use, and resizing the browser.

2. Dark Mode
   -Trigger: User clicks the theme button.
   -DOM Change: Page switches between light and dark themes. Reloading resets to light mode.
   -Edge Cases: Repeated clicks and reloading while dark mode is active.

3. Dynamic Hobbies
   -Trigger: About page loads.
   -DOM Change: Hobbies and descriptions are displayed from an array of objects using an array method.
   -Edge Cases: Empty array, missing information, and missing container.

4. Contact Form Validation
   -Trigger: User submits the form.
   -DOM Change: Invalid submissions are prevented, and specific error messages appear beside invalid fields.
   -Edge Cases: Empty fields, invalid email, spaces only, and correcting errors before resubmitting.

Contact Form Rules:
   -Name is required.
   -Email is required and must have a valid format.
   -Message is required.


Numbered Pseudocode

1. Navigation Toggle
  1.Find the menu button and navigation menu.
  2.Wait for the user to click the menu button.
  3.If the menu is hidden, show it.
  4.Otherwise, hide it.

2. Dark Mode
  1.Find the theme button and page.
  2.Wait for the user to click the theme button.
  3.If the page is in light mode, switch to dark mode.
  4.Otherwise, switch to light mode.
  5.Start in light mode whenever the page loads.

3. Dynamic Hobbies
  1.Create an array of hobby objects with titles and descriptions.
  2.Find the hobbies container on the About page.
  3.Use an array method to go through each hobby.
  4.isplay each hobby's title and description.
  5.If the array is empty, display a message.

4. Contact Form Validation
  1.Find the contact form and its fields.
  2.Wait for the user to submit the form.
  3.Prevent the default submission while checking the fields.
  4.Check if the name is empty.
  5.Check if the email is empty or invalid.
  6.Check if the message is empty.
  7.Display a specific error beside each invalid field.
  8.If all fields are valid, clear the errors and allow the intended submission behavior.


**REVISIONED PROMPTED BY THE AI'S QUESTION**

M5 Specification

1. Navigation Toggle
   -Trigger: User clicks the menu button.
   -DOM Change: Menu shows or hides.
   -Edge Cases: Missing elements, keyboard use, repeated clicks, and browser resizing. Menu is visible on desktop and hidden on mobile by default.

2. Dark Mode
   -Trigger: User clicks the theme button.
   -DOM Change: Page switches between light and dark modes.
   -Edge Cases: Missing elements, repeated clicks, and reloading. Page always starts in light mode.

3. Dynamic Hobbies
   -Trigger: About page loads.
   -DOM Change: Hobbies display from an array of objects using an array method.
   -Edge Cases: Empty array, missing titles or descriptions, missing container, and duplicate displays. Use fallback text for missing information.

4. Contact Form
   -Trigger: User submits the form.
   -DOM Change: Specific errors appear beside invalid fields.
   -Edge Cases: Empty or spaces-only values, invalid email, correcting errors, and multiple invalid fields. Valid submissions show a success message without sending data to a server.

Validation Rules:
   -Name is requred.
   -Email is required and must be valid.
   -Message is required.


Numbered Pseudocode

1. Navigation Toggle
  1.Find the menu button and navigation menu.
  2.Stop if either is missing.
  3.Show the menu on desktop and hide it on mobile.
  4.Toggle the menu when activated.
  5.Update visibility when the browser is resized.

2. Dark Mode
  1.Find the theme button and page.
  2.Stop if either is missing.
  3.Start in light mode.
  4.Toggle between light and dark modes when clicked.

3. Dynamic Hobbies
  1.Create an array of hobby objects.
  2.Find and clear the hobbies container.
  3.Stop if the container is missing.
  4.Display a message if the array is empty.
  5.Use an array method to display each hobby, using fallback text when needed.

4. Contact Form
  1.Find the form and required fields.
  2.Stop if required elements are missing.
  3.Prevent default submission while validating.
  4.Check the name, email, and message.
  5.Show specific errors for invalid fields.
  6.Clear errors when fields are corrected.
  7.If invalid, prevent submission.
  8.f valid, show a success message without sending data to a server.