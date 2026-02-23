import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';

dotenv.config();

const seedBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('🗑️ Cleared existing blogs');

    // Sample blogs with slides
    const blogs = [
      {
        title: "7 Healthy Eating Habits for Better Health",
        category: "Healthy",
        author: "Dr. Sarah Johnson",
        blogSlides: [
          {
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
            text: "7 Healthy Eating Habits for Better Health"
          },
          {
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
            text: "1. Eat More Whole Foods\n\nWhole foods are nutrient-dense and free from artificial additives. They provide more vitamins, minerals, and fiber compared to processed foods."
          },
          {
            image: "https://images.unsplash.com/photo-1505576399279-1a202fa467b0?w=800&h=600&fit=crop",
            text: "2. Stay Hydrated\n\nDrinking enough water is essential for all bodily functions. Aim for 8-10 glasses of water per day to maintain optimal health."
          },
          {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
            text: "3. Practice Portion Control\n\nUse smaller plates and bowls to control portion sizes. Listen to your body's hunger cues and eat mindfully."
          },
          {
            image: "https://images.unsplash.com/photo-1476124369162-f4b5f00b0a95?w=800&h=600&fit=crop",
            text: "4. Include More Vegetables\n\nVegetables are packed with nutrients and fiber. Try to fill half your plate with colorful vegetables at lunch and dinner."
          },
          {
            image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd994b5?w=800&h=600&fit=crop",
            text: "5. Choose Healthy Fats\n\nOpt for avocados, nuts, seeds, and olive oil. These healthy fats support heart health and brain function."
          },
          {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
            text: "6. Reduce Sugar Intake\n\nLimit sugary drinks and foods. Choose natural sweeteners and be mindful of hidden sugars in processed foods."
          },
          {
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
            text: "7. Plan Your Meals\n\nMeal planning helps you make healthier choices and save time. Prepare meals in advance for busy weekdays."
          }
        ]
      },
      {
        title: "The Power of Reading: Transform Your Mind",
        category: "Education",
        author: "Prof. Michael Chen",
        blogSlides: [
          {
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop",
            text: "The Power of Reading: Transform Your Mind"
          },
          {
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=600&fit=crop",
            text: "1. Improves Cognitive Function\n\nReading exercises your brain and improves concentration, memory, and analytical skills. Regular reading keeps your mind sharp."
          },
          {
            image: "https://images.unsplash.com/photo-1516979187457-635ffe35ff31?w=800&h=600&fit=crop",
            text: "2. Expands Your Knowledge\n\nBooks provide access to unlimited information. You can learn about any topic and gain new perspectives from various authors."
          },
          {
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop",
            text: "3. Enhances Vocabulary\n\nReading exposes you to new words and phrases. This improves your communication skills and language proficiency."
          },
          {
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop",
            text: "4. Reduces Stress and Anxiety\n\nReading provides an escape from daily worries. It promotes relaxation and mental well-being."
          },
          {
            image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
            text: "5. Builds Empathy\n\nStories help you understand different perspectives and cultures. This develops emotional intelligence and empathy."
          },
          {
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop",
            text: "6. Improves Focus and Concentration\n\nIn a world of distractions, reading helps train your focus. It enhances your ability to concentrate on complex tasks."
          },
          {
            image: "https://images.unsplash.com/photo-1460959375917-37f7738be0d5?w=800&h=600&fit=crop",
            text: "7. Inspires Creativity\n\nReading exposes you to creative ideas and imagination. This inspires innovation and creative thinking."
          }
        ]
      },
      {
        title: "5 Skills Every Developer Should Master",
        category: "Jobs",
        author: "Alex Rivera",
        blogSlides: [
          {
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
            text: "5 Skills Every Developer Should Master"
          },
          {
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
            text: "1. Problem-Solving\n\nThe ability to break down complex problems and find efficient solutions is fundamental. Practice algorithmic thinking and logical reasoning."
          },
          {
            image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
            text: "2. Full-Stack Development\n\nUnderstand both frontend and backend technologies. This makes you more valuable and gives you a complete project understanding."
          },
          {
            image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop",
            text: "3. Version Control (Git)\n\nMastery of Git is essential for collaboration. Learn branching, merging, and best practices for code management."
          },
          {
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
            text: "4. Communication Skills\n\nAbility to explain technical concepts clearly is crucial. Good communication helps in teamwork and client relations."
          },
          {
            image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop",
            text: "5. Continuous Learning\n\nTechnology evolves rapidly. Stay updated with new frameworks, tools, and best practices through courses and projects."
          },
          {
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
            text: "6. Testing & Debugging\n\nWrite tests for your code and master debugging techniques. This ensures code quality and reliability."
          },
          {
            image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop",
            text: "7. System Design\n\nUnderstand scalability, performance, and architecture. Design systems that can grow and handle large-scale applications."
          }
        ]
      }
    ];

    // Insert blogs
    const createdBlogs = await Blog.insertMany(blogs);
    console.log(`✅ Created ${createdBlogs.length} sample blogs`);

    // Show created blogs
    console.log('\n📚 Sample Blogs:');
    createdBlogs.forEach((blog, index) => {
      console.log(`${index + 1}. ${blog.title} (${blog.category})`);
    });

    await mongoose.disconnect();
    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding database:', err.message);
    process.exit(1);
  }
};

seedBlogs();
