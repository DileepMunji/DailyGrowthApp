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

    // Sample blogs with slides - Expanded collection
    const blogs = [
      // HEALTHY CATEGORY (6 blogs)
      {
        title: "7 Healthy Eating Habits for Better Health",
        category: "Healthy",
        author: "Dr. Sarah Johnson",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop", text: "7 Healthy Eating Habits for Better Health" },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "1. Eat More Whole Foods\n\nWhole foods are nutrient-dense and free from artificial additives." },
          { image: "https://images.unsplash.com/photo-1505576399279-1a202fa467b0?w=800&h=600&fit=crop", text: "2. Stay Hydrated\n\nDrinking enough water is essential for all bodily functions." },
          { image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop", text: "3. Practice Portion Control\n\nUse smaller plates and listen to your body's hunger cues." },
          { image: "https://images.unsplash.com/photo-1476124369162-f4b5f00b0a95?w=800&h=600&fit=crop", text: "4. Include More Vegetables\n\nFill half your plate with colorful vegetables." },
          { image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd994b5?w=800&h=600&fit=crop", text: "5. Choose Healthy Fats\n\nOpt for avocados, nuts, seeds, and olive oil." },
          { image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop", text: "6. Reduce Sugar Intake\n\nChoose natural sweeteners and limit processed foods." },
          { image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop", text: "7. Plan Your Meals\n\nMeal planning helps you make healthier choices." }
        ]
      },
      {
        title: "Fitness: Starting Your Exercise Journey",
        category: "Healthy",
        author: "Coach Mike Peterson",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", text: "Fitness: Starting Your Exercise Journey" },
          { image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop", text: "1. Set Realistic Goals\n\nStart with small, achievable fitness goals." },
          { image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", text: "2. Find Activities You Enjoy\n\nChoose exercises you like to stay motivated." },
          { image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop", text: "3. Start Slow\n\nGradual progression prevents injuries." },
          { image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", text: "4. Consistency is Key\n\nExercise regularly for best results." },
          { image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop", text: "5. Get Enough Rest\n\nRecovery is important for building strength." },
          { image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", text: "6. Track Your Progress\n\nKeep records of your workouts." },
          { image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop", text: "7. Stay Hydrated\n\nDrink plenty of water during workouts." }
        ]
      },
      {
        title: "Mental Health: 5 Ways to Reduce Stress",
        category: "Healthy",
        author: "Dr. Emily Chen",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "Mental Health: 5 Ways to Reduce Stress" },
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "1. Practice Meditation\n\nEven 10 minutes can calm your mind." },
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "2. Take Care of Your Body\n\nExercise regularly for mental clarity." },
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "3. Practice Gratitude\n\nAppreciate the good things in life." },
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "4. Connect with Others\n\nSpend time with loved ones." },
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "5. Get Quality Sleep\n\nAim for 7-9 hours per night." },
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "6. Set Boundaries\n\nLearn to say no to unnecessary stress." },
          { image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", text: "7. Seek Professional Help\n\nThere's no shame in asking for support." }
        ]
      },
      {
        title: "Sleep Better: Natural Tips for Quality Rest",
        category: "Healthy",
        author: "Sleep Specialist Lisa Roberts",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "Sleep Better: Natural Tips for Quality Rest" },
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "1. Stick to a Schedule\n\nGo to bed at the same time daily." },
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "2. Create a Dark Room\n\nUse blackout curtains." },
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "3. Keep It Cool\n\n65-68°F is ideal for sleep." },
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "4. Avoid Screens Before Bed\n\nBlue light disrupts sleep." },
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "5. Try Relaxation Techniques\n\nDeep breathing or yoga helps." },
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "6. Avoid Caffeine\n\nCut off caffeine 6 hours before bed." },
          { image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", text: "7. Invest in Comfort\n\nA good mattress matters!" }
        ]
      },
      {
        title: "Boost Your Immunity Naturally",
        category: "Healthy",
        author: "Nutritionist James Wilson",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "Boost Your Immunity Naturally" },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "1. Eat Immune-Boosting Foods\n\nCitrus, garlic, and ginger are powerful." },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "2. Get Enough Vitamin D\n\nSunlight is the best source." },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "3. Stay Hydrated\n\nWater supports all body functions." },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "4. Exercise Regularly\n\nPhysical activity strengthens immunity." },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "5. Manage Stress\n\nChronic stress weakens immunity." },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "6. Get Quality Sleep\n\nImmunity peaks with good sleep." },
          { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop", text: "7. Stay Positive\n\nOptimism has healing power!" }
        ]
      },

      // EDUCATION CATEGORY (6 blogs)
      {
        title: "The Power of Reading: Transform Your Mind",
        category: "Education",
        author: "Prof. Michael Chen",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop", text: "The Power of Reading: Transform Your Mind" },
          { image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=600&fit=crop", text: "1. Improves Cognitive Function\n\nReading exercises your brain." },
          { image: "https://images.unsplash.com/photo-1516979187457-635ffe35ff31?w=800&h=600&fit=crop", text: "2. Expands Your Knowledge\n\nBooks provide unlimited information." },
          { image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop", text: "3. Enhances Vocabulary\n\nYou learn new words and phrases." },
          { image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop", text: "4. Reduces Stress\n\nReading provides an escape." },
          { image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop", text: "5. Builds Empathy\n\nStories help you understand others." },
          { image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop", text: "6. Improves Focus\n\nYou learn to concentrate deeply." },
          { image: "https://images.unsplash.com/photo-1460959375917-37f7738be0d5?w=800&h=600&fit=crop", text: "7. Inspires Creativity\n\nStories spark imagination!" }
        ]
      },
      {
        title: "Mastering Time Management",
        category: "Education",
        author: "Productivity Coach Amanda Lee",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "Mastering Time Management" },
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "1. Prioritize Tasks\n\nIdentify what's truly important." },
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "2. Use the Pomodoro Technique\n\n25 minutes focus, 5 minutes break." },
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "3. Set Boundaries\n\nLearn to say no to distractions." },
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "4. Break Big Tasks Down\n\nSmaller steps are less overwhelming." },
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "5. Eliminate Time Wasters\n\nIdentify what drains your time." },
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "6. Delegate When Possible\n\nYou can't do everything alone." },
          { image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop", text: "7. Review and Improve\n\nContinuously refine your system." }
        ]
      },
      {
        title: "Learning Styles: Find Your Best Way to Learn",
        category: "Education",
        author: "Education Psychologist Dr. Karen Adams",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "Learning Styles: Find Your Best Way to Learn" },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "1. Visual Learning\n\nYou learn best through images." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "2. Auditory Learning\n\nYou prefer listening and discussing." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "3. Kinesthetic Learning\n\nYou learn by doing and experiencing." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "4. Reading/Writing Learning\n\nYou prefer text and note-taking." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "5. Identify Your Style\n\nTake a learning styles quiz." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "6. Adapt Your Methods\n\nUse techniques that work for you." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "7. Combine Multiple Styles\n\nUse many approaches for best results." }
        ]
      },
      {
        title: "Building Critical Thinking Skills",
        category: "Education",
        author: "Prof. Richard Thompson",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "Building Critical Thinking Skills" },
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "1. Question Everything\n\nDon't accept information at face value." },
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "2. Analyze Information\n\nBreak down complex ideas." },
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "3. Identify Assumptions\n\nExamine the premises of arguments." },
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "4. Evaluate Evidence\n\nCheck if sources are reliable." },
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "5. Consider Perspectives\n\nSee situations from multiple angles." },
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "6. Draw Conclusions\n\nMake informed decisions." },
          { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", text: "7. Stay Open-Minded\n\nBe willing to change your views!" }
        ]
      },
      {
        title: "The Art of Effective Communication",
        category: "Education",
        author: "Communication Expert Dr. Patricia Moore",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "The Art of Effective Communication" },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "1. Listen Actively\n\nGive full attention to others." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "2. Speak Clearly\n\nExpress yourself concisely." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "3. Use Body Language\n\nNon-verbal cues matter greatly." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "4. Ask Clarifying Questions\n\nEnsure mutual understanding." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "5. Adapt to Your Audience\n\nTailor your message accordingly." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "6. Show Empathy\n\nUnderstand others' emotions." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "7. Provide Feedback\n\nHelp others improve too!" }
        ]
      },

      // JOBS CATEGORY (6 blogs)
      {
        title: "5 Skills Every Developer Should Master",
        category: "Jobs",
        author: "Alex Rivera",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop", text: "5 Skills Every Developer Should Master" },
          { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop", text: "1. Problem-Solving\n\nBreak down complex problems." },
          { image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop", text: "2. Full-Stack Development\n\nUnderstand frontend and backend." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "3. Version Control (Git)\n\nMastery of Git is essential." },
          { image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop", text: "4. Communication Skills\n\nExplain technical concepts clearly." },
          { image: "https://images.unsplash.com/photo-1516534083918-c7f87e1d57b7?w=800&h=600&fit=crop", text: "5. Continuous Learning\n\nTechnology evolves rapidly." },
          { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop", text: "6. Testing & Debugging\n\nWrite tests for your code." },
          { image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop", text: "7. System Design\n\nDesign scalable systems." }
        ]
      },
      {
        title: "How to Land Your First Developer Job",
        category: "Jobs",
        author: "Hiring Manager Tony Davis",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "How to Land Your First Developer Job" },
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "1. Build a Portfolio\n\nShow your best projects." },
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "2. Network Actively\n\nAttend tech meetups and conferences." },
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "3. Practice Coding Problems\n\nPrepare for interviews." },
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "4. Create a Strong Resume\n\nHighlight key achievements." },
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "5. Level Up Your GitHub\n\nMaintain quality code repositories." },
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "6. Contribute to Open Source\n\nGain real experience." },
          { image: "https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800&h=600&fit=crop", text: "7. Don't Give Up\n\nRejection is normal!" }
        ]
      },
      {
        title: "Remote Work: Pros and Cons",
        category: "Jobs",
        author: "Workplace Expert Sarah Norton",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "Remote Work: Pros and Cons" },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "1. Flexibility Benefits\n\nWork from anywhere, anytime." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "2. Cost Savings\n\nNo commute, save on expenses." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "3. Challenges of Isolation\n\nMiss face-to-face interaction." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "4. Set Clear Boundaries\n\nWork-life balance is crucial." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "5. Communication is Key\n\nOvercommunicate with team." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "6. Create Your Office\n\nHave a dedicated workspace." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "7. Find Your Rhythm\n\nDiscover what works for you!" }
        ]
      },
      {
        title: "Career Growth: Planning Your Path",
        category: "Jobs",
        author: "Career Coach Jennifer Lee",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "Career Growth: Planning Your Path" },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "1. Define Your Goals\n\nKnow where you want to go." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "2. Assess Your Skills\n\nIdentify your strengths." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "3. Find a Mentor\n\nLearn from experienced professionals." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "4. Keep Learning\n\nDevelop new skills constantly." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "5. Network Strategically\n\nBuild meaningful relationships." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "6. Take on Challenges\n\nStep outside your comfort zone." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "7. Celebrate Progress\n\nAcknowledge your achievements!" }
        ]
      },
      {
        title: "Negotiating Your Salary",
        category: "Jobs",
        author: "HR Director Michael Stewart",
        blogSlides: [
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "Negotiating Your Salary" },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "1. Research Market Rates\n\nKnow your worth." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "2. Prepare Your Case\n\nHave data to support your request." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "3. Practice Negotiation\n\nRole-play beforehand." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "4. Timing Matters\n\nNegotiate at the right moment." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "5. Be Confident\n\nDemand respect for your skills." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "6. Consider Benefits\n\nSalary is more than just pay." },
          { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", text: "7. Know When to Walk\n\nDon't settle for less!" }
        ]
      }
    ];

    // Insert blogs
    const createdBlogs = await Blog.insertMany(blogs);
    console.log(`✅ Created ${createdBlogs.length} sample blogs`);

    // Show created blogs by category
    console.log('\n📚 Sample Blogs by Category:');
    
    const categories = ['Healthy', 'Education', 'Jobs'];
    categories.forEach((category) => {
      const categoryBlogs = createdBlogs.filter(b => b.category === category);
      console.log(`\n${category.toUpperCase()} (${categoryBlogs.length} blogs):`);
      categoryBlogs.forEach((blog, index) => {
        console.log(`  ${index + 1}. ${blog.title}`);
      });
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
