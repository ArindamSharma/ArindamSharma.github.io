const blog2 = {
  title: "Understanding Machine Learning: From Basics to Implementation",
  publishDate: "2024-12-15",
  author: "Arindam Sharma",
  readTime: "12 min read",
  category: "Machine Learning",
  tags: ["Python", "ML", "Data Science", "AI"],
  summary: "Dive deep into machine learning concepts, algorithms, and practical implementation using Python.",
  image: "/resource/img/projects/project2.jpg",
  content: [
    {
      type: "paragraph",
      content: "Machine Learning has revolutionized how we approach problem-solving in the digital age. From recommendation systems to autonomous vehicles, ML algorithms are everywhere, quietly making our lives easier and more efficient."
    },
    {
      type: "heading",
      level: 2,
      content: "What is Machine Learning?"
    },
    {
      type: "paragraph",
      content: "At its core, machine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed. Instead of following pre-programmed instructions, ML systems identify patterns in data and make predictions or decisions based on those patterns."
    },
    {
      type: "heading",
      level: 2,
      content: "Types of Machine Learning"
    },
    {
      type: "paragraph",
      content: "Machine learning can be broadly categorized into three main types:"
    },
    {
      type: "list",
      listType: "bullet",
      items: [
        "Supervised Learning: Learning with labeled examples",
        "Unsupervised Learning: Finding patterns in unlabeled data",
        "Reinforcement Learning: Learning through trial and error with rewards"
      ]
    },
    {
      type: "heading",
      level: 3,
      content: "Supervised Learning"
    },
    {
      type: "paragraph",
      content: "Supervised learning is like learning with a teacher. The algorithm learns from input-output pairs, making it capable of predicting outcomes for new, unseen data. Common applications include email spam detection, image classification, and price prediction."
    },
    {
      type: "heading",
      level: 2,
      content: "Getting Started with Python"
    },
    {
      type: "paragraph",
      content: "Python has become the de facto language for machine learning due to its simplicity and powerful libraries. Let's look at essential libraries you'll need:"
    },
    {
      type: "code",
      language: "python",
      content: "# Essential ML libraries\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error"
    },
    {
      type: "heading",
      level: 2,
      content: "Building Your First Model"
    },
    {
      type: "paragraph",
      content: "Let's create a simple linear regression model to predict house prices based on size. This example will demonstrate the basic workflow of machine learning projects."
    },
    {
      type: "code",
      language: "python",
      content: "# Sample data\nX = [[1400], [1600], [1700], [1875], [1100], [1550]]\ny = [245000, 312000, 279000, 308000, 199000, 219000]\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# Create and train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Make predictions\npredictions = model.predict(X_test)\nprint(f'Predictions: {predictions}')"
    }
  ]
};