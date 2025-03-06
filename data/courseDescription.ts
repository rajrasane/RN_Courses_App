const getCourseDescription = (title: string): string => {
    switch (title) {
      case 'Web Development Bootcamp':
        return 'Dive into the world of web development. Learn HTML, CSS, and JavaScript to build responsive websites. Master front-end and back-end concepts and create your own web applications.';
      case 'Python for Beginners':
        return 'Start your coding journey with Python! This course covers the fundamentals of Python programming, from basic syntax to building simple applications. Perfect for beginners.';
      case 'React Native Mastery':
        return 'Build cross-platform mobile apps with React Native. Learn to create native-like experiences for iOS and Android using JavaScript. Master components, navigation, and state management.';
      case 'JavaScript Fundamentals':
        return 'Unlock the power of JavaScript! Learn the core concepts of JavaScript, including variables, functions, and DOM manipulation. Build interactive web pages and applications.';
      case 'Data Structures and Algorithms':
        return 'Master the essential concepts of data structures and algorithms. Learn to solve complex problems efficiently and improve your coding skills. Prepare for technical interviews and advance your career.';
      default:
        return 'Explore the details of this course. Learn about the curriculum, instructors, and what you will achieve upon completion.';
    }
  };

export default getCourseDescription;