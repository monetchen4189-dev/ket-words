// KET 300高频单词数据
const ketWords = {
    daily: [
        { word: "snack", meaning: "零食", example: "I like to eat snacks after school." },
        { word: "cook", meaning: "做饭", example: "My mom can cook delicious food." },
        { word: "hungry", meaning: "饿的", example: "I feel hungry now." },
        { word: "full", meaning: "饱的", example: "I am full after eating dinner." },
        { word: "tasty", meaning: "美味的", example: "The cake is very tasty." },
        { word: "delicious", meaning: "好吃的", example: "Chinese food is delicious." },
        { word: "fork", meaning: "叉子", example: "Use a fork to eat the cake." },
        { word: "knife", meaning: "刀", example: "Be careful with the knife." },
        { word: "spoon", meaning: "勺子", example: "Use a spoon to eat soup." },
        { word: "plate", meaning: "盘子", example: "Put the food on the plate." },
        { word: "bowl", meaning: "碗", example: "I eat rice from a bowl." },
        { word: "table", meaning: "桌子", example: "We sit around the table to eat." },
        { word: "chair", meaning: "椅子", example: "Please sit on the chair." },
        { word: "kitchen", meaning: "厨房", example: "My mom cooks in the kitchen." },
        { word: "restaurant", meaning: "餐厅", example: "We go to a restaurant for dinner." },
        { word: "waiter", meaning: "服务员", example: "The waiter brings us the menu." },
        { word: "menu", meaning: "菜单", example: "Let's look at the menu." },
        { word: "order", meaning: "点菜", example: "I want to order a pizza." },
        { word: "bill", meaning: "账单", example: "Can I have the bill, please?" },
        { word: "pay", meaning: "支付", example: "I will pay for the food." },
        { word: "money", meaning: "钱", example: "I have some money in my pocket." },
        { word: "cheap", meaning: "便宜的", example: "The apples are cheap." },
        { word: "expensive", meaning: "贵的", example: "The toy is expensive." },
        { word: "breakfast", meaning: "早餐", example: "I eat breakfast at 7 o'clock." },
        { word: "lunch", meaning: "午餐", example: "We have lunch at school." },
        { word: "dinner", meaning: "晚餐", example: "We have dinner at home." },
        { word: "drink", meaning: "饮料", example: "I want a drink of water." },
        { word: "water", meaning: "水", example: "I drink water every day." },
        { word: "juice", meaning: "果汁", example: "I like apple juice." },
        { word: "tea", meaning: "茶", example: "My dad drinks tea." },
        { word: "coffee", meaning: "咖啡", example: "My mom drinks coffee." },
        { word: "milk", meaning: "牛奶", example: "I drink milk every morning." },
        { word: "bottle", meaning: "瓶子", example: "I have a bottle of water." },
        { word: "glass", meaning: "玻璃杯", example: "I drink juice from a glass." },
        { word: "cup", meaning: "杯子", example: "I have a cup of tea." }
    ],
    school: [
        { word: "school", meaning: "学校", example: "I go to school every day." },
        { word: "classroom", meaning: "教室", example: "We study in the classroom." },
        { word: "teacher", meaning: "老师", example: "My teacher is very nice." },
        { word: "student", meaning: "学生", example: "I am a student." },
        { word: "desk", meaning: "课桌", example: "I sit at my desk." },
        { word: "chair", meaning: "椅子", example: "I sit on a chair." },
        { word: "blackboard", meaning: "黑板", example: "The teacher writes on the blackboard." },
        { word: "pen", meaning: "钢笔", example: "I write with a pen." },
        { word: "pencil", meaning: "铅笔", example: "I draw with a pencil." },
        { word: "ruler", meaning: "尺子", example: "I use a ruler to draw lines." },
        { word: "book", meaning: "书本", example: "I read a book." },
        { word: "notebook", meaning: "笔记本", example: "I write notes in my notebook." },
        { word: "paper", meaning: "纸", example: "I draw on paper." },
        { word: "lesson", meaning: "课", example: "We have English lessons every day." },
        { word: "subject", meaning: "学科", example: "Math is my favorite subject." },
        { word: "homework", meaning: "作业", example: "I do my homework after school." },
        { word: "exam", meaning: "考试", example: "We have an exam next week." },
        { word: "test", meaning: "测试", example: "We have a test today." },
        { word: "answer", meaning: "回答", example: "I know the answer." },
        { word: "question", meaning: "问题", example: "The teacher asks a question." },
        { word: "write", meaning: "写", example: "I write my name." },
        { word: "read", meaning: "读", example: "I read a story." },
        { word: "speak", meaning: "说", example: "I speak English." },
        { word: "listen", meaning: "听", example: "I listen to the teacher." },
        { word: "learn", meaning: "学习", example: "I learn new words." },
        { word: "study", meaning: "学习（动词）", example: "I study hard." },
        { word: "English", meaning: "英语", example: "I study English." },
        { word: "math", meaning: "数学", example: "I study math." },
        { word: "science", meaning: "科学", example: "I study science." },
        { word: "art", meaning: "美术", example: "I study art." },
        { word: "music", meaning: "音乐", example: "I study music." },
        { word: "computer", meaning: "电脑", example: "I use a computer." },
        { word: "break", meaning: "课间休息", example: "We have a break between lessons." },
        { word: "bell", meaning: "铃声", example: "The bell rings." },
        { word: "library", meaning: "图书馆", example: "I go to the library to read books." }
    ],
    family: [
        { word: "home", meaning: "家", example: "I go home after school." },
        { word: "house", meaning: "房子", example: "We live in a big house." },
        { word: "room", meaning: "房间", example: "I have my own room." },
        { word: "bedroom", meaning: "卧室", example: "I sleep in my bedroom." },
        { word: "bathroom", meaning: "浴室", example: "I take a shower in the bathroom." },
        { word: "living room", meaning: "客厅", example: "We watch TV in the living room." },
        { word: "sofa", meaning: "沙发", example: "I sit on the sofa." },
        { word: "bed", meaning: "床", example: "I sleep in my bed." },
        { word: "pillow", meaning: "枕头", example: "I put my head on the pillow." },
        { word: "blanket", meaning: "毯子", example: "I cover myself with a blanket." },
        { word: "family", meaning: "家人", example: "I love my family." },
        { word: "parent", meaning: "父母之一", example: "My parent works hard." },
        { word: "mother", meaning: "母亲", example: "My mother is kind." },
        { word: "father", meaning: "父亲", example: "My father is strong." },
        { word: "son", meaning: "儿子", example: "I am my parents' son." },
        { word: "daughter", meaning: "女儿", example: "She is her parents' daughter." },
        { word: "brother", meaning: "兄弟", example: "I have a brother." },
        { word: "sister", meaning: "姐妹", example: "I have a sister." },
        { word: "grandmother", meaning: "祖母", example: "My grandmother is old." },
        { word: "grandfather", meaning: "祖父", example: "My grandfather is kind." },
        { word: "aunt", meaning: "阿姨/姑妈", example: "My aunt is nice." },
        { word: "uncle", meaning: "叔叔/舅舅", example: "My uncle is strong." },
        { word: "pet", meaning: "宠物", example: "I have a pet dog." },
        { word: "dog", meaning: "狗", example: "I have a dog." },
        { word: "cat", meaning: "猫", example: "I have a cat." },
        { word: "bird", meaning: "鸟", example: "I have a bird." },
        { word: "fish", meaning: "鱼", example: "I have a fish." },
        { word: "clean", meaning: "打扫", example: "I clean my room." },
        { word: "wash", meaning: "洗", example: "I wash my hands." },
        { word: "cook", meaning: "烹饪", example: "My mom cooks dinner." },
        { word: "tidy", meaning: "整理", example: "I tidy my desk." },
        { word: "make the bed", meaning: "铺床", example: "I make the bed every morning." },
        { word: "trash", meaning: "垃圾", example: "I throw away the trash." },
        { word: "open", meaning: "打开", example: "I open the door." },
        { word: "close", meaning: "关闭", example: "I close the window." }
    ],
    nature: [
        { word: "mountain", meaning: "山", example: "We climb the mountain." },
        { word: "river", meaning: "河", example: "The river is clean." },
        { word: "lake", meaning: "湖", example: "We swim in the lake." },
        { word: "sea", meaning: "海", example: "We go to the sea in summer." },
        { word: "beach", meaning: "海滩", example: "We play on the beach." },
        { word: "sand", meaning: "沙子", example: "The sand is soft." },
        { word: "rock", meaning: "石头", example: "The rock is hard." },
        { word: "forest", meaning: "森林", example: "There are many trees in the forest." },
        { word: "nature", meaning: "自然", example: "I love nature." },
        { word: "air", meaning: "空气", example: "The air is fresh." },
        { word: "fire", meaning: "火", example: "Be careful with fire." },
        { word: "ice", meaning: "冰", example: "The ice is cold." },
        { word: "fog", meaning: "雾", example: "It's foggy today." },
        { word: "cloudy", meaning: "阴天的", example: "It's cloudy today." },
        { word: "dry", meaning: "干燥的", example: "The weather is dry." },
        { word: "wet", meaning: "潮湿的", example: "The ground is wet." },
        { word: "snowman", meaning: "雪人", example: "We make a snowman." },
        { word: "umbrella", meaning: "雨伞", example: "I use an umbrella when it rains." },
        { word: "raincoat", meaning: "雨衣", example: "I wear a raincoat when it rains." },
        { word: "sunny", meaning: "晴朗的", example: "It's sunny today." },
        { word: "rainy", meaning: "下雨的", example: "It's rainy today." },
        { word: "snowy", meaning: "下雪的", example: "It's snowy today." },
        { word: "windy", meaning: "有风的", example: "It's windy today." },
        { word: "hot", meaning: "热的", example: "It's hot in summer." },
        { word: "cold", meaning: "冷的", example: "It's cold in winter." },
        { word: "warm", meaning: "暖和的", example: "It's warm in spring." },
        { word: "cool", meaning: "凉爽的", example: "It's cool in autumn." },
        { word: "weather", meaning: "天气", example: "What's the weather like today?" },
        { word: "sun", meaning: "太阳", example: "The sun is shining." },
        { word: "moon", meaning: "月亮", example: "The moon is bright." },
        { word: "star", meaning: "星星", example: "The stars are twinkling." },
        { word: "rain", meaning: "雨", example: "It's raining." },
        { word: "snow", meaning: "雪", example: "It's snowing." },
        { word: "wind", meaning: "风", example: "The wind is blowing." },
        { word: "rainbow", meaning: "彩虹", example: "I see a rainbow." }
    ],
    food: [
        { word: "rice", meaning: "米饭", example: "I eat rice every day." },
        { word: "noodles", meaning: "面条", example: "I like noodles." },
        { word: "bread", meaning: "面包", example: "I eat bread for breakfast." },
        { word: "cake", meaning: "蛋糕", example: "I eat cake on my birthday." },
        { word: "biscuit", meaning: "饼干", example: "I eat biscuits as snacks." },
        { word: "egg", meaning: "鸡蛋", example: "I eat eggs for breakfast." },
        { word: "milk", meaning: "牛奶", example: "I drink milk every morning." },
        { word: "juice", meaning: "果汁", example: "I drink apple juice." },
        { word: "water", meaning: "水", example: "I drink water every day." },
        { word: "tea", meaning: "茶", example: "My dad drinks tea." },
        { word: "coffee", meaning: "咖啡", example: "My mom drinks coffee." },
        { word: "apple", meaning: "苹果", example: "I eat an apple every day." },
        { word: "banana", meaning: "香蕉", example: "I like bananas." },
        { word: "orange", meaning: "橙子", example: "I eat oranges." },
        { word: "pear", meaning: "梨", example: "I eat pears." },
        { word: "grape", meaning: "葡萄", example: "I eat grapes." },
        { word: "strawberry", meaning: "草莓", example: "I like strawberries." },
        { word: "tomato", meaning: "西红柿", example: "I eat tomatoes." },
        { word: "potato", meaning: "土豆", example: "I eat potatoes." },
        { word: "carrot", meaning: "胡萝卜", example: "I eat carrots." },
        { word: "meat", meaning: "肉", example: "I eat meat." },
        { word: "pork", meaning: "猪肉", example: "I eat pork." },
        { word: "beef", meaning: "牛肉", example: "I eat beef." },
        { word: "chicken", meaning: "鸡肉", example: "I eat chicken." },
        { word: "fish", meaning: "鱼", example: "I eat fish." },
        { word: "soup", meaning: "汤", example: "I eat soup." },
        { word: "salad", meaning: "沙拉", example: "I eat salad." },
        { word: "sandwich", meaning: "三明治", example: "I eat sandwiches for lunch." },
        { word: "pizza", meaning: "披萨", example: "I like pizza." },
        { word: "hamburger", meaning: "汉堡", example: "I eat hamburgers." },
        { word: "hot dog", meaning: "热狗", example: "I eat hot dogs." },
        { word: "fries", meaning: "薯条", example: "I like fries." },
        { word: "chocolate", meaning: "巧克力", example: "I like chocolate." },
        { word: "ice cream", meaning: "冰淇淋", example: "I like ice cream." },
        { word: "cheese", meaning: "奶酪", example: "I eat cheese." }
    ],
    animals: [
        { word: "dog", meaning: "狗", example: "I have a dog." },
        { word: "cat", meaning: "猫", example: "I have a cat." },
        { word: "rabbit", meaning: "兔子", example: "I have a rabbit." },
        { word: "bird", meaning: "鸟", example: "I have a bird." },
        { word: "fish", meaning: "鱼", example: "I have a fish." },
        { word: "duck", meaning: "鸭", example: "I see a duck." },
        { word: "chicken", meaning: "鸡", example: "I see a chicken." },
        { word: "cow", meaning: "母牛", example: "I see a cow." },
        { word: "pig", meaning: "猪", example: "I see a pig." },
        { word: "sheep", meaning: "羊", example: "I see a sheep." },
        { word: "horse", meaning: "马", example: "I see a horse." },
        { word: "tiger", meaning: "老虎", example: "I see a tiger in the zoo." },
        { word: "lion", meaning: "狮子", example: "I see a lion in the zoo." },
        { word: "elephant", meaning: "大象", example: "I see an elephant in the zoo." },
        { word: "monkey", meaning: "猴子", example: "I see a monkey in the zoo." },
        { word: "bear", meaning: "熊", example: "I see a bear in the zoo." },
        { word: "snake", meaning: "蛇", example: "I see a snake." },
        { word: "panda", meaning: "熊猫", example: "I see a panda in the zoo." },
        { word: "whale", meaning: "鲸鱼", example: "I see a whale in the sea." },
        { word: "dolphin", meaning: "海豚", example: "I see a dolphin in the sea." },
        { word: "shark", meaning: "鲨鱼", example: "I see a shark in the sea." },
        { word: "frog", meaning: "青蛙", example: "I see a frog." },
        { word: "turtle", meaning: "乌龟", example: "I see a turtle." },
        { word: "mouse", meaning: "老鼠", example: "I see a mouse." },
        { word: "wolf", meaning: "狼", example: "I see a wolf." },
        { word: "fox", meaning: "狐狸", example: "I see a fox." },
        { word: "deer", meaning: "鹿", example: "I see a deer." },
        { word: "giraffe", meaning: "长颈鹿", example: "I see a giraffe in the zoo." },
        { word: "zebra", meaning: "斑马", example: "I see a zebra in the zoo." },
        { word: "koala", meaning: "考拉", example: "I see a koala in the zoo." },
        { word: "kangaroo", meaning: "袋鼠", example: "I see a kangaroo in the zoo." },
        { word: "bee", meaning: "蜜蜂", example: "I see a bee." },
        { word: "butterfly", meaning: "蝴蝶", example: "I see a butterfly." },
        { word: "spider", meaning: "蜘蛛", example: "I see a spider." },
        { word: "ant", meaning: "蚂蚁", example: "I see an ant." }
    ]
};

// DOM 元素
const categoryBtns = document.querySelectorAll('.category-btn');
const wordList = document.querySelector('.word-list');
const modeBtns = document.querySelectorAll('.mode-btn');
const reviewContent = document.querySelector('.review-content');
const testTypeBtns = document.querySelectorAll('.test-type-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const startTestBtn = document.getElementById('start-test');
const testContent = document.querySelector('.test-content');
const testResults = document.querySelector('.test-results');
const gameBtns = document.querySelectorAll('.game-btn');
const gameContent = document.querySelector('.game-content');

// 初始化页面
function init() {
    // 加载默认分类的单词
    loadWords('daily');
    
    // 加载默认复习模式
    loadReview('flashcard');
    
    // 绑定事件监听器
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadWords(btn.dataset.category);
        });
    });
    
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadReview(btn.dataset.mode);
        });
    });
    
    testTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            testTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            difficultyBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    startTestBtn.addEventListener('click', startTest);
    
    gameBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loadGame(btn.dataset.game);
        });
    });
}

// 加载单词列表
function loadWords(category) {
    const words = ketWords[category];
    wordList.innerHTML = '';
    
    words.forEach(word => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.innerHTML = `
            <div class="word">${word.word}</div>
            <div class="meaning">${word.meaning}</div>
            <div class="example">${word.example}</div>
        `;
        wordList.appendChild(card);
    });
}

// 加载复习内容
function loadReview(mode) {
    reviewContent.innerHTML = '';
    
    // 随机选择20个单词
    const allWords = Object.values(ketWords).flat();
    const randomWords = shuffleArray([...allWords]).slice(0, 20);
    
    if (mode === 'flashcard') {
        randomWords.forEach(word => {
            const flashcard = document.createElement('div');
            flashcard.className = 'flashcard';
            flashcard.innerHTML = `
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <div class="flashcard-word">${word.word}</div>
                    </div>
                    <div class="flashcard-back">
                        <div class="flashcard-meaning">${word.meaning}</div>
                        <div style="margin-top: 10px; font-size: 0.9rem; font-style: italic;">${word.example}</div>
                    </div>
                </div>
            `;
            reviewContent.appendChild(flashcard);
        });
    } else if (mode === 'list') {
        const list = document.createElement('div');
        list.className = 'word-list';
        
        randomWords.forEach(word => {
            const card = document.createElement('div');
            card.className = 'word-card';
            card.innerHTML = `
                <div class="word">${word.word}</div>
                <div class="meaning">${word.meaning}</div>
                <div class="example">${word.example}</div>
            `;
            list.appendChild(card);
        });
        
        reviewContent.appendChild(list);
    }
}

// 开始测试
function startTest() {
    const testType = document.querySelector('.test-type-btn.active').dataset.type;
    const difficulty = document.querySelector('.difficulty-btn.active').dataset.level;
    
    testContent.innerHTML = '';
    testResults.innerHTML = '';
    
    // 根据难度选择单词数量
    let wordCount = 5;
    if (difficulty === 'medium') wordCount = 10;
    if (difficulty === 'hard') wordCount = 15;
    
    // 随机选择单词
    const allWords = Object.values(ketWords).flat();
    const testWords = shuffleArray([...allWords]).slice(0, wordCount);
    
    if (testType === 'multiple') {
        createMultipleChoiceTest(testWords);
    } else if (testType === 'fill') {
        createFillInTest(testWords);
    } else if (testType === 'matching') {
        createMatchingTest(testWords);
    }
}

// 创建选择题测试
function createMultipleChoiceTest(words) {
    words.forEach((word, index) => {
        // 生成干扰选项
        const allWords = Object.values(ketWords).flat();
        const otherWords = allWords.filter(w => w.word !== word.word);
        const distractors = shuffleArray([...otherWords]).slice(0, 3).map(w => w.meaning);
        const options = shuffleArray([...distractors, word.meaning]);
        
        const question = document.createElement('div');
        question.className = 'question';
        question.innerHTML = `
            <h4>问题 ${index + 1}: ${word.word} 的意思是什么？</h4>
            <div class="options">
                ${options.map((option, i) => `
                    <div class="option" data-correct="${option === word.meaning}">
                        ${String.fromCharCode(65 + i)}. ${option}
                    </div>
                `).join('')}
            </div>
        `;
        
        testContent.appendChild(question);
    });
    
    // 添加提交按钮
    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-btn';
    submitBtn.textContent = '提交答案';
    submitBtn.addEventListener('click', () => {
        checkMultipleChoiceAnswers();
    });
    
    testContent.appendChild(submitBtn);
}

// 检查选择题答案
function checkMultipleChoiceAnswers() {
    const options = document.querySelectorAll('.option');
    let correctCount = 0;
    
    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // 检查答案
    const selectedOptions = document.querySelectorAll('.option.selected');
    selectedOptions.forEach(option => {
        if (option.dataset.correct === 'true') {
            option.classList.add('correct');
            correctCount++;
        } else {
            option.classList.add('incorrect');
        }
    });
    
    // 显示结果
    const totalQuestions = document.querySelectorAll('.question').length;
    testResults.innerHTML = `
        <h3>测试结果</h3>
        <p>你答对了 ${correctCount} 题，共 ${totalQuestions} 题。</p>
        <p>得分：${Math.round((correctCount / totalQuestions) * 100)}%</p>
    `;
}

// 创建填空题测试
function createFillInTest(words) {
    words.forEach((word, index) => {
        const question = document.createElement('div');
        question.className = 'question';
        question.innerHTML = `
            <h4>问题 ${index + 1}: ${word.meaning} 的英文是什么？</h4>
            <input type="text" class="spelling-input" data-correct="${word.word}" placeholder="请输入英文单词">
        `;
        
        testContent.appendChild(question);
    });
    
    // 添加提交按钮
    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-btn';
    submitBtn.textContent = '提交答案';
    submitBtn.addEventListener('click', () => {
        checkFillInAnswers();
    });
    
    testContent.appendChild(submitBtn);
}

// 检查填空题答案
function checkFillInAnswers() {
    const inputs = document.querySelectorAll('.spelling-input');
    let correctCount = 0;
    
    inputs.forEach(input => {
        const userAnswer = input.value.toLowerCase().trim();
        const correctAnswer = input.dataset.correct.toLowerCase();
        
        if (userAnswer === correctAnswer) {
            input.style.backgroundColor = '#ccffcc';
            correctCount++;
        } else {
            input.style.backgroundColor = '#ffcccc';
            input.value += ` (正确答案: ${input.dataset.correct})`;
        }
    });
    
    // 显示结果
    const totalQuestions = inputs.length;
    testResults.innerHTML = `
        <h3>测试结果</h3>
        <p>你答对了 ${correctCount} 题，共 ${totalQuestions} 题。</p>
        <p>得分：${Math.round((correctCount / totalQuestions) * 100)}%</p>
    `;
}

// 创建匹配题测试
function createMatchingTest(words) {
    const leftColumn = document.createElement('div');
    leftColumn.style.float = 'left';
    leftColumn.style.width = '45%';
    leftColumn.style.marginRight = '10%';
    
    const rightColumn = document.createElement('div');
    rightColumn.style.float = 'left';
    rightColumn.style.width = '45%';
    
    // 随机排序单词
    const shuffledWords = shuffleArray([...words]);
    const shuffledMeanings = shuffleArray([...words.map(w => w.meaning)]);
    
    shuffledWords.forEach((word, index) => {
        const item = document.createElement('div');
        item.style.marginBottom = '10px';
        item.innerHTML = `
            <span style="font-weight: bold;">${index + 1}. ${word.word}</span>
        `;
        leftColumn.appendChild(item);
    });
    
    shuffledMeanings.forEach((meaning, index) => {
        const item = document.createElement('div');
        item.style.marginBottom = '10px';
        item.innerHTML = `
            <span style="font-weight: bold;">${index + 1}. ${meaning}</span>
        `;
        rightColumn.appendChild(item);
    });
    
    testContent.appendChild(leftColumn);
    testContent.appendChild(rightColumn);
    
    // 添加提交按钮
    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-btn';
    submitBtn.style.clear = 'both';
    submitBtn.style.marginTop = '20px';
    submitBtn.textContent = '查看答案';
    submitBtn.addEventListener('click', () => {
        showMatchingAnswers(words);
    });
    
    testContent.appendChild(submitBtn);
}

// 显示匹配题答案
function showMatchingAnswers(words) {
    testResults.innerHTML = `
        <h3>正确答案</h3>
        <ul style="list-style: none; padding: 0;">
            ${words.map(word => `
                <li style="margin-bottom: 5px;">${word.word} - ${word.meaning}</li>
            `).join('')}
        </ul>
    `;
}

// 加载游戏
function loadGame(game) {
    gameContent.innerHTML = '';
    
    if (game === 'memory') {
        createMemoryGame();
    } else if (game === 'hangman') {
        createHangmanGame();
    } else if (game === 'spelling') {
        createSpellingGame();
    }
}

// 创建记忆配对游戏
function createMemoryGame() {
    // 选择10个单词
    const allWords = Object.values(ketWords).flat();
    const gameWords = shuffleArray([...allWords]).slice(0, 10);
    
    // 创建卡片对
    const cards = [];
    gameWords.forEach(word => {
        cards.push({ content: word.word, type: 'word' });
        cards.push({ content: word.meaning, type: 'meaning' });
    });
    
    // 打乱卡片
    const shuffledCards = shuffleArray(cards);
    
    const game = document.createElement('div');
    game.className = 'memory-game';
    
    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.content = card.content;
        cardElement.dataset.type = card.type;
        cardElement.textContent = '?';
        
        cardElement.addEventListener('click', () => {
            if (cardElement.classList.contains('flipped')) return;
            
            cardElement.classList.add('flipped');
            cardElement.textContent = card.content;
            
            const flippedCards = document.querySelectorAll('.memory-card.flipped');
            if (flippedCards.length === 2) {
                const card1 = flippedCards[0];
                const card2 = flippedCards[1];
                
                // 检查是否匹配
                const word1 = gameWords.find(w => w.word === card1.dataset.content || w.meaning === card1.dataset.content);
                const word2 = gameWords.find(w => w.word === card2.dataset.content || w.meaning === card2.dataset.content);
                
                if (word1 && word2 && word1.word === word2.word) {
                    // 匹配成功
                    setTimeout(() => {
                        card1.style.backgroundColor = '#ccffcc';
                        card2.style.backgroundColor = '#ccffcc';
                        card1.style.pointerEvents = 'none';
                        card2.style.pointerEvents = 'none';
                    }, 1000);
                } else {
                    // 匹配失败
                    setTimeout(() => {
                        card1.classList.remove('flipped');
                        card2.classList.remove('flipped');
                        card1.textContent = '?';
                        card2.textContent = '?';
                    }, 1000);
                }
            }
        });
        
        game.appendChild(cardElement);
    });
    
    gameContent.appendChild(game);
}

// 创建猜词游戏
function createHangmanGame() {
    // 选择一个单词
    const allWords = Object.values(ketWords).flat();
    const selectedWord = shuffleArray([...allWords])[0];
    
    const game = document.createElement('div');
    game.className = 'hangman-game';
    
    //  hangman 绘图区域
    const drawing = document.createElement('div');
    drawing.className = 'hangman-drawing';
    game.appendChild(drawing);
    
    // 单词显示
    const wordDisplay = document.createElement('div');
    wordDisplay.className = 'word-display';
    wordDisplay.textContent = '_ '.repeat(selectedWord.word.length);
    game.appendChild(wordDisplay);
    
    // 字母按钮
    const letters = document.createElement('div');
    letters.className = 'letters';
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of alphabet) {
        const letterBtn = document.createElement('button');
        letterBtn.className = 'letter-btn';
        letterBtn.textContent = letter;
        letterBtn.addEventListener('click', () => {
            letterBtn.disabled = true;
            
            if (selectedWord.word.toLowerCase().includes(letter)) {
                // 字母在单词中
                let display = wordDisplay.textContent;
                for (let i = 0; i < selectedWord.word.length; i++) {
                    if (selectedWord.word[i].toLowerCase() === letter) {
                        display = display.substring(0, i * 2) + selectedWord.word[i] + display.substring(i * 2 + 1);
                    }
                }
                wordDisplay.textContent = display;
                
                // 检查是否猜对所有字母
                if (!display.includes('_')) {
                    alert(`恭喜你猜对了！单词是 ${selectedWord.word}，意思是 ${selectedWord.meaning}。`);
                }
            } else {
                // 字母不在单词中
                alert(`字母 ${letter} 不在单词中。`);
            }
        });
        letters.appendChild(letterBtn);
    }
    
    game.appendChild(letters);
    gameContent.appendChild(game);
}

// 创建拼写游戏
function createSpellingGame() {
    // 选择一个单词
    const allWords = Object.values(ketWords).flat();
    let selectedWord = shuffleArray([...allWords])[0];
    
    const game = document.createElement('div');
    game.className = 'spelling-game';
    
    const instruction = document.createElement('h3');
    instruction.textContent = `请拼写出意思为 "${selectedWord.meaning}" 的英文单词`;
    game.appendChild(instruction);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'spelling-input';
    input.placeholder = '请输入英文单词';
    game.appendChild(input);
    
    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-btn';
    submitBtn.textContent = '提交';
    submitBtn.addEventListener('click', () => {
        const userAnswer = input.value.toLowerCase().trim();
        if (userAnswer === selectedWord.word.toLowerCase()) {
            alert('恭喜你拼对了！');
            // 选择新单词
            selectedWord = shuffleArray([...allWords])[0];
            instruction.textContent = `请拼写出意思为 "${selectedWord.meaning}" 的英文单词`;
            input.value = '';
        } else {
            alert(`拼错了，正确答案是 ${selectedWord.word}`);
        }
    });
    
    game.appendChild(submitBtn);
    gameContent.appendChild(game);
}

// 辅助函数：打乱数组
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);