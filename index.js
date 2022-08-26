// Declaring a variable called express to import the 'express' module
const express = require('express');
// Declaring a variable called app to call the 'express' function
const app = express();

// Declaring the facts variable that contains a list of different facts
const facts = [
    // Every fact contains and id (special number) and a fact that contains the fun fact.
    {
        id: 1,
        fact: "There are around 700 separate programming languages."
    },
    {
        id: 2,
        fact: "According to many online studies, the most disliked programming languages are Perl, Delphi, and VBA."
    },
    {
        id: 3,
        fact: "Recent studies show that around 70% of coding jobs have nothing to do with technology at all."
    },
    {
        id: 4,
        fact: "The world's first computer programmer was a renowned female mathematician."
    },
    {
        id: 5,
        fact: "Computer Programming was instrumental in helping end World War II."
    },
    {
        id: 6,
        fact: "The first computer virus was created in 1986 by two brothers called Basit and Amjad Farooq Alvi, in Pakistan."
    },
    {
        id: 7,
        fact: "The first programming language was called FORTRAN."
    },
    {
        id: 8,
        fact: "The first-ever computer game made zero profit for its team of creators."
    },
    {
        id: 9,
        fact: "The first computer “bug” was an actual real-life bug. It was in 1947 that the first case of a computer bug was recorded. Grace Hopper, an admiral in the US Navy, was working on a Mark II computer when she discovered a moth had become stuck in the relay, thus causing it to malfunction."
    },
    {
        id: 10,
        fact: "Programming can power-up your brain."
    },
    {
        id: 11,
        fact: "The First Computer Mouse was Made of Wood by Doug Engelbart in 1964."
    },
    {
        id: 12,
        fact: "Some of the Biggest Computer Brands Started in Garages (Apple, Microsoft, HP...)."
    },
    {
        id: 13,
        fact: "People Blink Less When They Use Computers."
    },
    {
        id: 14,
        fact: "Hackers Write About 6,000 New Viruses Each Month."
    },
    {
        id: 15,
        fact: "More Than 80% of Daily Emails in the U.S. are Spam."
    },
    {
        id: 16,
        fact: " MyDoom is the Most Expensive Computer Virus in History, and the virus cost about $38.5 billion in damage and came about in January of 2006."
    },
    {
        id: 17,
        fact: "The First Gigabyte Drive Cost $40,000. It was released in 1980 and weighted 550 lbs."
    },
    {
        id: 18,
        fact: "MIT Has Computers That can Detect Fake Smiles."
    },
    {
        id: 19,
        fact: "Roughly 10% of the world's money is physical. The rest exists digitally."
    },
    {
        id: 20,
        fact: "Intel's first microprocessor was intended for a calculator."
    },
    {
        id: 21,
        fact: "The internet was created by Sir Tim Burner Lee in 1989."
    },
    {
        id: 22,
        fact: "More than 17 billion devices worldwide are connected to the internet."
    },
    {
        id: 23,
        fact: "The first hard drive was made in 1979."
    },
    {
        id: 24,
        fact: "You can spell the word typewriter using the top line of letters on a computer's keyboard."
    },
    {
        id: 25,
        fact: "When you work on a computer your hands travel 20 kilometres a day!"
    },
    {
        id: 26,
        fact: "Before we had Windows, it was supposed to be named Interface Manager."
    },
    {
        id: 27,
        fact: "The first webcam was used to monitor a coffee maker, allowing users to save returns to an empty pot.."
    },
    {
        id: 28,
        fact: "Microsoft's founder, the infamous Bill Gates, was actually a college dropout."
    },
    {
        id: 29,
        fact: "ILOVEYOU is widely believed to be the most deadly worm virus ever developed."
    },
    {
        id: 30,
        fact: "Intel's 1 KB RAM memory chip was the biggest memory chip available in 1969."
    },
    {
        id: 31,
        fact: "When compared to a Qwerty keyboard, a Dvorak keyboard enables you to type 20 times quicker."
    },
    {
        id: 32,
        fact: "The most common password for a computer and social media platforms is 123456."
    },
    {
        id: 33,
        fact: "Linux leads the industry as it is used by Google, Facebook, Twitter, and Amazon."
    },
    {
        id: 34,
        fact: "In 1936, Russians developed a computer that functioned on water."
    },
    {
        id: 35,
        fact: "Only two of the top 500 supercomputers are Windows-based, whereas 485 use Linux."
    },
    {
        id: 36,
        fact: "Hard drives are very sensitive to vibration, and even yelling at them or tapping the device causes them to slow down."
    },
    {
        id: 37,
        fact: "E-mail was first launched before the Internet."
    },
    {
        id: 38,
        fact: "“Completely Automated Public Turing Test to Tell Computers and Humans Apart” is what CAPTCHA stands for."
    },
    {
        id: 39,
        fact: "Google originated from the mathematics phrase “googol,” which denotes “one followed by 100 zeros.”."
    },
    {
        id: 40,
        fact: "Mosaic was the original browser, released in 1993 way before the mainstream ones such as Mozilla or Chrome Explore."
    },
    {
        id: 41,
        fact: "Per year, Google receives 1.2 trillion search requests, which translates to about 40,000 every second and 3.5 billion each day (I think most of them are StackOverflow questions hahaahahaha)."
    },
    {
        id: 42,
        fact: "With over 746 million active users, China boasts the world’s largest internet population."
    },
    {
        id: 43,
        fact: "Motorola produced the first-ever portable mobile phone. It was released in 1983."
    },
    {
        id: 44,
        fact: "No one yet has verified the identity of Bitcoin’s founder."
    },
    {
        id: 45,
        fact: "Japan has the fastest Internet speed of 319 terabits per second. And this internet speed is speedy enough to download approximately 80,000 movies per second."
    },
    {
        id: 46,
        fact: "Facebook was originally a directory of freshmen with their names and pictures."
    },
    {
        id: 47,
        fact: "The first alarm clock only rings at 4 a.m."
    },
    {
        id: 48,
        fact: "Nokia’s first product is toilet paper."
    },
    {
        id: 49,
        fact: "The ‘fox’ in the Mozilla Firefox logo is actually a red panda."
    },
    {
        id: 50,
        fact: "For every 12 million email spams, only one gets a reply"
    },
    {
        id: 51,
        fact: "Nintendo was established as a playing card business."
    },
    {
        id: 52,
        fact: "Reading from a screen slows your reading time."
    },
    {
        id: 53,
        fact: "There are 4000 luxury cars sunken in the Atlantic Ocean in 2022."
    },
    {
        id: 54,
        fact: "As of 2022, there are 5.1 billion Internet users, and 4.5 billion of them access it on their mobile phones."
    },
    {
        id: 55,
        fact: "In 1884, William Henry Fruen invented the Automatic Liquid-Drawing Device” or the first vending machine."
    },
    {
        id: 56,
        fact: "Some Android versions were named after desserts since Android devices make people’s lives sweeter."
    },
    {
        id: 57,
        fact: "Tensorflow is the most watched and forked repository on Github."
    },
    {
        id: 58,
        fact: "According to statistics, Americans spend two hours and 54 minutes using their mobile phones per day."
    },
    {
        id: 59,
        fact: "King’s Field is the world’s first PlayStation game."
    },
    {
        id: 60,
        fact: "You cannot access the Deep Web using Google."
    },
    {
        id: 61,
        fact: "The first iPod has the capacity to store 1000 mp3 songs."
    },
    {
        id: 62,
        fact: "Charles Babbage, an English mathematician, is the father of computing."
    },
    {
        id: 63,
        fact: "350, 000 tweets are sent every minute."
    },
    {
        id: 64,
        fact: "The computer mouse is named after its uncanny resemblance to a mouse having a long tail."
    },
    {
        id: 65,
        fact: "Anyone can edit and modify any page on Wikipedia."
    },
    {
        id: 66,
        fact: "Apple’s OS is more difficult to crack than Android system."
    },
    {
        id: 67,
        fact: "The intense fear or dislike of new technology is called technophobia."
    },
    {
        id: 68,
        fact: "According to the PYPL Popularity of Programming Language Index, which evaluates how frequently language lessons are searched on Google, Python is the most widely used programming language."
    },
    {
        id: 69,
        fact: "The name Oak was intended to be used for the popular Java that we commonly use now, but it was already used and copyrighted."
    },
    {
        id: 70,
        fact: "NASA’s reusable space shuttle in the 1970s had less code than our phones today."
    },
    {
        id: 71,
        fact: "In 2018, the video game business generated about $135 billion in revenue. "
    },
    {
        id: 72,
        fact: "In any programming language, infinity cannot be represented as an integer."
    },
    {
        id: 73,
        fact: "During the Covid-19 outbreak, Avi Schiffmann, a teenager, created one of the most prominent COVID-19 tracking websites on the internet, named “ncov2019.live.”"
    },
    {
        id: 74,
        fact: "Bill Gates, Microsoft’s co-founder, developed his first computer software, a tic-tac-toe program that allowed people to play games against the machine."
    },
    {
        id: 75,
        fact: "C is the only programming language that has been around for the longest."
    },
    {
        id: 76,
        fact: "Apple Inc. became the first US trillion-dollar corporation in 2018."
    },
    {
        id: 77,
        fact: "Knowing how to code is a major requirement for astronomers."
    },
    {
        id: 78,
        fact: "Steve Wozniak and Steve Jobs, who co-founded Apple, originally achieved fame as youths by creating the video game named Breakout."
    },
    {
        id: 79,
        fact: "The JavaScript programming language is unique in that it is not tied to any specific company or organization."
    },
    {
        id: 80,
        fact: "Approximately 75% of elementary school students prefer to learn a programming language over French or some other foreign language."
    },
    {
        id: 81,
        fact: "Grey hat programmers are a hybrid of the two, assisting individuals while simultaneously abusing their web-based weaknesses if not compensated for their services."
    },
    {
        id: 82,
        fact: "A Java programmer’s average annual income is around $84,000."
    },
    {
        id: 83,
        fact: "The average coder writes 10 to 12 lines of code every day."
    },
    {
        id: 84,
        fact: "Each year, computer viruses negatively impact the global economy by over $1.5 trillion."
    },
    {
        id: 85,
        fact: "Rust is the most loved programming language (2022 StackOverflow survey)"
    },
    {
        id: 86,
        fact: "Samsung is 38 years and 1 month older than Apple."
    },
    {
        id: 87,
        fact: "The first hard drive could only hold 5MB of data."
    },
    {
        id: 88,
        fact: "1 out of 8 people in the United States met online."
    },
    {
        id: 89,
        fact: "A 15-year-old guy once hacked NASA."
    },
    {
        id: 90,
        fact: "A computer as powerful as the human brain would be able to perform 38,000 trillion operations per second."
    },
    {
        id: 91,
        fact: "Amazon now sells more ebooks than hardcover books."
    },
    {
        id: 92,
        fact: "Bill Gates' house was designed using a Macintosh computer."
    },
    {
        id: 93,
        fact: "The woman who rented out her garage to Larry Page and Sergey Brin in 1998 later became the CEO of YouTube."
    },
    {
        id: 94,
        fact: "Cambridge University used the first webcam."
    },
    {
        id: 95,
        fact: "The password for the computer controls of nuclear-tipped missiles of the U.S was 00000000 for eight years"
    },
    {
        id: 96,
        fact: "Approximately 70% of virus writers are said to work under contract for organized crime syndicates."
    },
    {
        id: 97,
        fact: "In 2010, a high school named Lower Merion School District in Pennsylvania issued a MacBook to each of its 2,306 students, then remotely activated the webcams to spy on the students at home."
    },
    {
        id: 98,
        fact: "It took Pixar 29 hours to render a single frame from Monster’s University. If done on a single CPU it would have taken 10,000 years to finish."
    },
    {
        id: 99,
        fact: "The computer in your cell phone today is million times cheaper and a thousands times more powerful and about a hundred thousands times smaller than the one computer at MIT in 1965."
    },
    {
        id: 100,
        fact: "YouTube was founded by 3 former employees of PayPal."
    },
    {
        id: 101,
        fact: "Europe is the second smallest continent (The first is Antarctica)."
    },
    {
        id: 102,
        fact: "Europe has the world’s smallest country, the Vatican City."
    },
    {
        id: 103,
        fact: "Three Quarters of world’s potatoes comes from Europe."
    },
    {
        id: 104,
        fact: "The continent of Europe has 50 countries."
    },
    {
        id: 105,
        fact: "The country with the biggest population in Europe is Russia."
    },
    {
        id: 106,
        fact: "The Louvre is the most visited attraction in Europe."
    },
    {
        id: 107,
        fact: "Europe is home to the world’s largest Church, St. Peter’s Basilica."
    },
    {
        id: 108,
        fact: "The Czech Republic has the most castles in Europe (932 castles)."
    },
    {
        id: 109,
        fact: "There are more than 200 languages spoken in Europe."
    },
    {
        id: 110,
        fact: "The most common language in Europe is English and 38% of the European population can speak it."
    },
    {
        id: 111,
        fact: "Christianity is the biggest religion in Europe, followed by Islam"
    },
    {
        id: 112,
        fact: "The Capital of Australia is Canberra."
    },
    {
        id: 113,
        fact: "Australia is a continent and a country."
    },
    {
        id: 114,
        fact: "Kangaroos only exist in Australia."
    },
    {
        id: 115,
        fact: "The Great Barrier Reef in Australia is the biggest reef system in the world."
    },
    {
        id: 116,
        fact: "Australia is split into 8 states. New South Wales has more people than any other state, and 65% of Austalian population lives in this state."
    },
    {
        id: 117,
        fact: "Australia is home to some dangerous animals."
    },
    {
        id: 118,
        fact: "Tasmania is part of the continent of Australia."
    },
    {
        id: 119,
        fact: "Due to climate change, Australia is suffering from many bush fires."
    },
    {
        id: 120,
        fact: "Australia was ‘discovered’ by European explorers in the 17th Century."
    },
    {
        id: 121,
        fact: "Indigenous Australians have lived on the continent for over 65,000 years."
    },
    {
        id: 122,
        fact: "There are 12 countries in South America."
    },
    {
        id: 123,
        fact: "The world’s largest tropical rainforest is located in South America."
    },
    {
        id: 124,
        fact: "The potato originated from South America."
    },
    {
        id: 125,
        fact: "The most spoken language in South America is Spanish."
    },
    {
        id: 126,
        fact: "There are 2 landlocked countries in South America. These countries are Paraguay and Bolivia."
    },
    {
        id: 127,
        fact: "There are 49 countries in Asia."
    },
    {
        id: 128,
        fact: "Two countries in Asia are also in Europe. These countries are Turkey and Russia!"
    },
    {
        id: 129,
        fact: "More than 4.7 billion people live on the Asian continent"
    },
    {
        id: 130,
        fact: "Asia is home to around 2,300 languages."
    },
    {
        id: 131,
        fact: "Asia covers one-third of the Earth’s surface"
    },
    {
        id: 132,
        fact: "The biggest island in Asia is Borneo. The island belongs to three countries: Malaysia and Brunei in the north and Indonesia in the south."
    },
    {
        id: 133,
        fact: "Asia is the birthplace of all major religions."
    },
    {
        id: 134,
        fact: "Africa is the second largest continent of the world."
    },
    {
        id: 135,
        fact: "There are 54 countries in Africa."
    },
    {
        id: 136,
        fact: "Most of the world’s diamonds come from Africa."
    },
    {
        id: 137,
        fact: "Africa makes about 70% of the world’s cocoa beans."
    },
    {
        id: 138,
        fact: "1.2 billion people live in Africa. Which is 16% of the world's population"
    },
    {
        id: 139,
        fact: "There are over 2000 different languages spoken in Africa."
    },
    {
        id: 140,
        fact: "More people are attacked by hippos than any other animal in Africa! So if you see an hippo, leave him alone."
    },
    {
        id: 141,
        fact: "There are over 30,000 species of fish."
    },
    {
        id: 142,
        fact: "Most fish don’t have eyelids."
    },
    {
        id: 143,
        fact: "Fish are cold-blooded!"
    },
    {
        id: 144,
        fact: "Cats can jump up to 6 times their height."
    },
    {
        id: 145,
        fact: "They have a total of 18 toes."
    },
    {
        id: 146,
        fact: "There are over 500 million pet cats around the world!"
    },
    {
        id: 147,
        fact: "Cats sleep for around 13 to 16 hours a day (70% of their life)."
    },
    {
        id: 148,
        fact: "1 year of a cats life equals to 15 years of a humans live."
    },
    {
        id: 149,
        fact: "One of the largest domestic cat breeds is a Maine Coon. It is 120cm long and lives in Italy."
    },
    {
        id: 150,
        fact: "Cats are very speedy. They can run up to 30mph."
    },
    {
        id: 151,
        fact: "The oldest cat was 38 years old."
    },
    {
        id: 152,
        fact: "Dogs can smell up to 100,000 times better than humans can."
    },
    {
        id: 153,
        fact: "Dogs noses are wet to absorb scent chemicals."
    },
    {
        id: 154,
        fact: "Chihuahuas are the smallest dog breed in the world."
    },
    {
        id: 155,
        fact: "There are around 200 different dog breeds."
    },
    {
        id: 156,
        fact: "Dogs are very clever!"
    },
    {
        id: 157,
        fact: "Dogs have been kept as pets for thousands of years."
    },
    {
        id: 158,
        fact: "The scientific name for a dog is ‘canis lupus familiaris’."
    },
    {
        id: 159,
        fact: "If you put all of the data in the world onto blu-ray disks, you’d have a stack of discs that would stretch way past the moon."
    },
    {
        id: 160,
        fact: "Apple were originally designing an apple shaped flip phone."
    },
    {
        id: 161,
        fact: "There are around 10,000 species of bird."
    },
    {
        id: 162,
        fact: "Birds don’t have teeth."
    },
    {
        id: 163,
        fact: "A group of birds is called a flock."
    },
    {
        id: 164,
        fact: "Some birds can mimic humans!"
    },
    {
        id: 165,
        fact: "Ostriches have the largest eyes in any mammal on land."
    },
    {
        id: 166,
        fact: "Turkey has the most busses in the world."
    },
    {
        id: 167,
        fact: "Volkswagen makes the most busses."
    },
    {
        id: 168,
        fact: "The human brain grows three times its size by your first birthday!"
    },
    {
        id: 169,
        fact: "The human brain gets smaller as we get older."
    },
    {
        id: 170,
        fact: "Brain freezes are called sphenopalatine ganglioneuralgia."
    },
    {
        id: 171,
        fact: "Dreams are a combination of imagination and physical conditions in the brain."
    },
    {
        id: 172,
        fact: "Multitasking is impossible."
    },
    {
        id: 173,
        fact: "The human brain contains over one hundred billion neurons."
    },
    {
        id: 174,
        fact: "We use more than 10% of our brain."
    },
    {
        id: 175,
        fact: "Short term memory is about a-minute-and-a-half."
    },
    {
        id: 176,
        fact: "The brain can't feel pain!"
    },
    {
        id: 177,
        fact: "The Sun is over 4.5 billion years old."
    },
    {
        id: 178,
        fact: "Many ancient civilisations thought The Sun was a God."
    },
    {
        id: 179,
        fact: "The surface of The Sun is 5,505 °C."
    },
    {
        id: 180,
        fact: "The Sun’s light reaches the Earth in eight minutes."
    },
    {
        id: 181,
        fact: "All the planets in The Solar System orbit The Sun."
    },
    {
        id: 182,
        fact: "The Sun is made from Hydrogen and Helium."
    },
    {
        id: 183,
        fact: "Solar Eclipses, where the Sun disappears in the day, are caused when the Moon is between the Sun and Earth."
    },
    {
        id: 184,
        fact: "Without The Sun there would be no life on Earth."
    },
    {
        id: 185,
        fact: "The Sun is the largest object in our solar system. However, its size is average compared to other stars."
    },
    {
        id: 186,
        fact: "The Solar System formed 4.6 Billion years ago."
    },
    {
        id: 187,
        fact: "The Sun is 93 million miles from the Earth."
    },
    {
        id: 188,
        fact: "All planets and the Sun in the Solar System are shaped like balls."
    },
    {
        id: 189,
        fact: "Planets in our Solar System are different temperatures."
    },
    {
        id: 190,
        fact: "There are 181 moons in The Solar System."
    },
    {
        id: 191,
        fact: "Neptune was the last planet to be discovered in The Solar System."
    },
    {
        id: 192,
        fact: "You can see Venus from Earth."
    },
    {
        id: 193,
        fact: "Plastic was invented in 1907."
    },
    {
        id: 194,
        fact: "Plastic is made from fossil fuels."
    },
    {
        id: 195,
        fact: "Plastic takes hundreds of years to break down."
    },
    {
        id: 196,
        fact: "More than 5 trillion pieces of plastic are already floating in our oceans."
    },
    {
        id: 197,
        fact: "There is a plastic island in the ocean three times bigger than France."
    },
    {
        id: 198,
        fact: "There will be more plastic in our oceans than fish by 2050."
    },
    {
        id: 199,
        fact: "Safer Internet Day is on 8th February every year."
    },
    {
        id: 200,
        fact: "It can take thousands of years for a natural beach to be created."
    },
    {
        id: 201,
        fact: "Sand comes from broken down minerals and rocks!"
    },
    {
        id: 202,
        fact: "Sand comes in lots of different colours."
    },
    {
        id: 203,
        fact: "The longest beach is Praia Do Cassino in Brazil! And it is 150 miles long."
    },
    {
        id: 204,
        fact: "5. The world’s shortest beach is Playa de Gulpiyuri! And it's only 50 meters long."
    },
    {
        id: 205,
        fact: "Victorian doctors used to prescribe a trip to the beach."
    },
    {
        id: 206,
        fact: "There are over 1,200 different species of animals and plants on British beaches."
    },
    {
        id: 207,
        fact: "Beaches are constantly changing."
    },
    {
        id: 208,
        fact: "Fraser Island is the biggest sand island!"
    },
    {
        id: 209,
        fact: "Sea turtles lay their eggs on beaches."
    },
    {
        id: 210,
        fact: "When rabbits are happy they jump around and flick their head and feet!"
    },
    {
        id: 211,
        fact: "Hamsters are banned in Hawaii."
    },
    {
        id: 212,
        fact: "Guinea pigs make 11 individual sounds!"
    },
    {
        id: 213,
        fact: "Some lizards detach their tails when in danger."
    },
    {
        id: 214,
        fact: "Tortoises can live over 100 years!"
    },
    {
        id: 215,
        fact: "Budgies have hollow bones to help them fly!"
    },
    {
        id: 216,
        fact: "Goldfish don’t have a three second memory."
    },
    {
        id: 217,
        fact: "For a rocket to get into orbit around Earth, it needs to travel 17,600 miles per hour!"
    },
    {
        id: 218,
        fact: "You could fit 1.3 million Earths into the Sun!"
    },
    {
        id: 219,
        fact: "Space is a very cold place at –270.45 Celsius!"
    },
    {
        id: 220,
        fact: "The Moon reflects light from the Sun."
    },
    {
        id: 221,
        fact: "The longest time an astronaut has spent in space is 437 days!"
    },
    {
        id: 222,
        fact: "There are volcanoes on other planets too!"
    },
    {
        id: 223,
        fact: "There are around 1,500 active volcanoes in the world."
    },
    {
        id: 224,
        fact: "The largest volcano on Earth is Mauna Loa in Hawaii."
    },
    {
        id: 225,
        fact: "Volcanoes are usually where tectonic plates meet."
    },
    {
        id: 226,
        fact: "The shockwaves that travel through the ground are called seismic waves."
    },
    {
        id: 227,
        fact: "The strongest ever earthquake was in Chile, in the year 1960."
    },
    {
        id: 228,
        fact: "There are around 130 million published books."
    },
    {
        id: 229,
        fact: "The most sold book is the Bible."
    },
    {
        id: 230,
        fact: "The longest book in the world is ‘Remembrance of Things Past’."
    },
    {
        id: 231,
        fact: "The most expensive book in the world is ‘the Codex Leicester’. It was sold for $30.8 million in 1994."
    },
    {
        id: 232,
        fact: "The first ever story written was ‘The Epic of Gilgamesh’ in 2100 BCE."
    },
    {
        id: 233,
        fact: "The largest collection consists of 1.5 million books!"
    },
    {
        id: 234,
        fact: "If you read 20 minutes a day, you would have read 1.8 million words in a year."
    },
    {
        id: 235,
        fact: "Johannes Gutenberg invented the printing press."
    },
    {
        id: 236,
        fact: "Dinosaurs were around millions of years ago!"
    },
    {
        id: 237,
        fact: "There were more than 700 species of dinosaurs."
    },
    {
        id: 238,
        fact: "Dinosaurs lived on all continents."
    },
    {
        id: 239,
        fact: "The word dinosaur came from an English palaeontologist."
    },
    {
        id: 240,
        fact: "One of the biggest dinosaurs was the Argentinosaurus."
    },
    {
        id: 241,
        fact: "Tyrannosaurus Rex (T-Rex) was the most ferocious dinosaur."
    },
    {
        id: 242,
        fact: "The longest dinosaur name is Micropachycephalosaurus."
    },
    {
        id: 243,
        fact: "Lizards, turtles, snakes and crocodiles all descend from dinosaurs."
    },
    {
        id: 244,
        fact: "An astroid hit and dinosaurs became extinct."
    },
    {
        id: 245,
        fact: "Lizards can detach their tails."
    },
    {
        id: 246,
        fact: "Geckos have microscopic hair on their feet!"
    },
    {
        id: 247,
        fact: "Most lizards can swim."
    },
    {
        id: 248,
        fact: "The Jaragua lizard is the smallest lizard in the world."
    },
    {
        id: 249,
        fact: "The biggest lizard is the Komodo dragon."
    },
    {
        id: 250,
        fact: "Lizards are cold blooded."
    },
    {
        id: 251,
        fact: "Some lizards can live for 50 years!"
    },
    {
        id: 252,
        fact: "Chameleons can look in different directions at the same time!"
    },
    {
        id: 253,
        fact: "Snakes smell with their tongues."
    },
    {
        id: 254,
        fact: "There are around 600 venomous snakes species."
    },
    {
        id: 255,
        fact: "Pit vipers, boa constrictors and pythons can sense heat."
    },
    {
        id: 256,
        fact: "Snakes have hundreds of ribs!"
    },
    {
        id: 257,
        fact: "Snakes hear using vibrations in their jaw bones."
    },
    {
        id: 258,
        fact: "There are over 3,000 different species of snakes."
    },
    {
        id: 259,
        fact: "The fastest snake can travel up to 12 miles per hour."
    },
    {
        id: 260,
        fact: "The longest snake is the reticulated python. It is over 6 meters long."
    },
    {
        id: 261,
        fact: "Snakes have flexible jaws."
    },
    {
        id: 262,
        fact: "Giraffes are the tallest mammal in the world."
    },
    {
        id: 263,
        fact: "Giraffes can stand half an hour after being born."
    },
    {
        id: 264,
        fact: "Giraffes stand up pretty much all the time."
    },
    {
        id: 265,
        fact: "Giraffes don’t need much sleep. However, they sleep only between 10 minutes and 2 hours."
    },
    {
        id: 266,
        fact: "Young giraffes hang out in groups until they are 5 months old."
    },
    {
        id: 267,
        fact: "Giraffes are super peaceful animals."
    },
    {
        id: 268,
        fact: "Giraffes are all unique!"
    },
    {
        id: 269,
        fact: "Giraffe’s tongues are massive! They can reach 45cm long or longer."
    },
    {
        id: 270,
        fact: "In the wild the giraffe usually lives up to around 25 years."
    },
    {
        id: 271,
        fact: "The Latin for giraffe is ‘Giraffe Camelopardalis’ which means ‘one who walks quickly, a camel marked like a leopard’."
    },
    {
        id: 272,
        fact: "Some plants are carnivores."
    },
    {
        id: 273,
        fact: "There are three different types of rock: Igneous, Sedimentary and Metamorphic."
    },
    {
        id: 274,
        fact: "Rocks are made of minerals."
    },
    {
        id: 275,
        fact: "Igneous rock comes from molten magma."
    },
    {
        id: 276,
        fact: "Sedimentary rock is very common."
    },
    {
        id: 277,
        fact: "You can find silver and gold in ores."
    },
    {
        id: 278,
        fact: "Rocks have been used for millions of years."
    },
    {
        id: 279,
        fact: "You use rocks and minerals at home (soap, toothpaste, batteries...)."
    },
    {
        id: 280,
        fact: "A dime has 118 ridges around the edge."
    },
    {
        id: 281,
        fact: "Fleas can jump 350 times its body length."
    },
    {
        id: 282,
        fact: "Hummingbirds are the only birds that can fly backwards."
    },
    {
        id: 283,
        fact: "Crocodiles cannot stick their tongue out."
    },
    {
        id: 284,
        fact: "Starfish do not have a brain."
    },
    {
        id: 285,
        fact: "Slugs have 4 noses."
    },
    {
        id: 286,
        fact: "Polar bear skin is black!"
    },
    {
        id: 287,
        fact: "The only mammal capable of flight is the bat."
    },
    {
        id: 288,
        fact: "The heart of a shrimp is located in its head."
    },
    {
        id: 289,
        fact: "The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene."
    },
    {
        id: 290,
        fact: "Elephants are the only animal that can't jump."
    },
    {
        id: 291,
        fact: "A newborn kangaroo is the size of a lima bean."
    },
    {
        id: 292,
        fact: "94% of pet owners say their animal pal makes them smile more than once a day."
    },
    {
        id: 293,
        fact: "A rhinoceros' horn is made of hair."
    },
    {
        id: 294,
        fact: "It is possible to hypnotize a frog by placing it on its back and gently stroking its stomach."
    },
    {
        id: 295,
        fact: "It takes a sloth two weeks to digest its food."
    },
    {
        id: 296,
        fact: "Nearly three percent of the ice in Antarctic glaciers is penguin urine."
    },
    {
        id: 297,
        fact: "A cow gives nearly 200,000 glasses of milk in a lifetime."
    },
    {
        id: 298,
        fact: "Bats always turn left when leaving a cave."
    },
    {
        id: 299,
        fact: "Giraffes have no vocal chords."
    },
    {
        id: 300,
        fact: "Kangaroos can't fart."
    },
    {
        id: 301,
        fact: "An ostrich's eye is bigger than its brain."
    },
    {
        id: 302,
        fact: "Around 50 percent of orangutans have fractured bones, due to falling out of trees on a regular basis."
    },
    {
        id: 303,
        fact: "Frogs cannot vomit. If one absolutely has to, then it will vomit its entire stomach."
    },
    {
        id: 304,
        fact: "There are over 400 species of sharks."
    },
    {
        id: 305,
        fact: "Sharks have a sixth sense. However, they’re able to sense electromagnetic fields and changes in water temperature, which allows them to find food."
    },
    {
        id: 306,
        fact: "Sharks can’t stop moving."
    },
    {
        id: 307,
        fact: "Some types of sharks are super small."
    },
    {
        id: 308,
        fact: "Sharks don’t have any bones."
    },
    {
        id: 309,
        fact: "The whale shark is the largest fish on Earth."
    },
    {
        id: 310,
        fact: "There are two species of wolves: The grey wolf and the red wolf"
    },
    {
        id: 311,
        fact: "Wolves are very social animals. They generally live in groups."
    },
    {
        id: 312,
        fact: "Wolves don’t actually howl at the moon. However, each wolf has his own distinct howl, and wolves use their howls to communicate with members of their packs or to scare other wolves away from their territory."
    },
    {
        id: 313,
        fact: "A wolf’s howl can be heard up to 10 miles away!"
    },
    {
        id: 314,
        fact: "Red wolves are almost extinct in the wild."
    },
    {
        id: 315,
        fact: "It’s not just tigers’ fur that’s striped. Tigers’ skin underneath their fur is also striped!"
    },
    {
        id: 316,
        fact: "Tigers are apex predators. They don't have predators (except humans)."
    },
    {
        id: 317,
        fact: "Tigers actually like the water. Unlike cats."
    },
    {
        id: 318,
        fact: "Elephants (almost) never forget."
    },
    {
        id: 319,
        fact: "Elephants have a lot of feelings."
    },
    {
        id: 320,
        fact: "Elephants are super smart."
    },
    {
        id: 321,
        fact: "Female elephants are more social than males."
    },
    {
        id: 322,
        fact: "Female elephants are the leaders!"
    },
    {
        id: 323,
        fact: "Elephants can be left- or right-“handed”!"
    },
    {
        id: 324,
        fact: "Elephants can do a lot when they’re born."
    },
    {
        id: 325,
        fact: "Elephants are pregnant for a LONG time, for an average of 22 months."
    },
    {
        id: 326,
        fact: "Lions are the second-largest cats in the world after the Tiger."
    },
    {
        id: 327,
        fact: "Female lions do most of the hunting."
    },
    {
        id: 328,
        fact: "Lions don’t live in the jungle."
    },
    {
        id: 329,
        fact: "Lions are the only cats who live in groups."
    },
    {
        id: 330,
        fact: "You can tell a lot about a lion by his mane."
    },
    {
        id: 331,
        fact: "Lions have no natural predators."
    },
    {
        id: 332,
        fact: "Lions are really loud. Their roar can be heard up to 5 miles."
    },
    {
        id: 333,
        fact: "Lions are nocturnal."
    },
    {
        id: 334,
        fact: "Killer whales are actually dolphins."
    },
    {
        id: 335,
        fact: "A group of dolphins is called a pod."
    },
    {
        id: 336,
        fact: "Dolphins can’t breathe underwater."
    },
    {
        id: 337,
        fact: "Dolphins remain conscious while they’re sleeping."
    },
    {
        id: 338,
        fact: "Dolphins grieve when they lose loved ones."
    },
    {
        id: 339,
        fact: "Pink dolphins actually exist."
    },
    {
        id: 340,
        fact: "Cats only meow to communicate with humans."
    },
    {
        id: 341,
        fact: "Domesticated cats share over 95 percent of their DNA with tigers."
    },
    {
        id: 342,
        fact: "The first cat was domesticated around 3600 B.C."
    },
    {
        id: 343,
        fact: "More than 200 cats live at Disneyland."
    },
    {
        id: 344,
        fact: "Cats are actually lactose intolerant. They can't digest milk."
    },
    {
        id: 345,
        fact: "Cats have a special organ that allows them to taste the air."
    },
    {
        id: 346,
        fact: "Cats aren’t nocturnal, but rather crepuscular."
    },
    {
        id: 347,
        fact: "Cat noses are just as unique as our fingerprints."
    },
    {
        id: 348,
        fact: "Cats can’t taste sweetness."
    },
    {
        id: 349,
        fact: "Pandas live in China."
    },
    {
        id: 351,
        fact: "Pandas are very shy."
    },
    {
        id: 352,
        fact: "Pandas are tree climbers."
    },
    {
        id: 353,
        fact: "Pandas are born with their eyes closed."
    },
    {
        id: 354,
        fact: "Pandas start tiny but grow big and strong."
    },
    {
        id: 355,
        fact: "Pandas really do love bamboo. They eat around 26-84 pounds per day."
    },
    {
        id: 356,
        fact: "Pandas love eating and sleeping."
    },
    {
        id: 357,
        fact: "Pandas don’t hibernate."
    },
    {
        id: 358,
        fact: "Giant pandas and red pandas aren’t the same."
    },
    {
        id: 359,
        fact: "Horses originally were about the size of a large dog millions of years ago."
    },
    {
        id: 360,
        fact: "About 6,000 years ago, it’s believed that humans first domesticated horses in places like Ukraine and Kazakhstan."
    },
    {
        id: 361,
        fact: "Horses have seriously fast reflexes."
    },
    {
        id: 362,
        fact: "Horses have a nearly 360-degree field of vision because of the way their eyes are positioned on the sides of their heads."
    },
    {
        id: 363,
        fact: "Horses have two blind spots: one directly behind them, and one just in front and below their noses"
    },
    {
        id: 364,
        fact: "Horses do not have teeth in the middle of their mouths."
    },
    {
        id: 365,
        fact: "Baby horses, or foals, can run within 24 hours of being born."
    },
    {
        id: 366,
        fact: "Horses can sleep both lying down and standing up."
    },
    {
        id: 367,
        fact: "There are about 60 million horses in the world, and they can be found all around the globe, except Antarctica!"
    },
    {
        id: 368,
        fact: "Horses can’t vomit or burp."
    },
    {
        id: 369,
        fact: "While the average life span of a horse is 25–30 years, the oldest horse ever lived to be 62 years old. He was appropriately named Old Billy, and he lived in England from 1760–1822."
    },
    {
        id: 370,
        fact: "Horses only have one less bone than humans. We have 206, and horses have 205. However, Arabian horses are different. They have one less pair of ribs, lumbar and tail vertebrae, meaning they only have 201 bones!"
    },
    {
        id: 371,
        fact: "Horses can understand and interpret their humans’ emotions."
    },
    {
        id: 372,
        fact: "A study found that horses exhibited an increase in heart rate when they looked at angry human faces versus happy ones."
    },
    {
        id: 373,
        fact: "The oldest penguin fossil is approximately 61 million years old."
    },
    {
        id: 374,
        fact: "Everyone knows penguins look like they’re wearing tuxedos. Turns out their black and white look has a clever purpose: It’s camouflage against potential predators when swimming called “countershading.”"
    },
    {
        id: 375,
        fact: "Penguins steal from each other to keep their babies safe (instead of going to find new rocks for their baby’s nest, penguins will sometimes just swipe a rock from their neighbor)."
    },
    {
        id: 376,
        fact: "Penguins can shoot “poop bombs” more than 4 feet (yes, really)."
    },
    {
        id: 377,
        fact: "Penguins don’t have teeth. They use the pointy end of their beak to help them grab food, which is typically fish."
    },
    {
        id: 378,
        fact: "Many male penguins give female penguins rocks to show their affection, and the ladies will use the rocks to build a nest."
    },
    {
        id: 379,
        fact: "The smallest species of penguin only weighs 3 pounds. Little Penguins or Fairy Penguins are a beautiful blue color, but only grow to just over a foot tall and a little over 3 pounds. They can be found along the coasts of New Zealand and Australia."
    },
    {
        id: 380,
        fact: "Every penguin has his or her own distinct “call.” Scientists believe unique noise helps them identify their mates in large crowds."
    },
    {
        id: 381,
        fact: "Teenage king penguins go through a molting stage where they lose their hair, and the awkward stage reminds experts of going through puberty."
    },
    {
        id: 382,
        fact: "Penguins don’t waste time under water. They can swim at speeds of over 10 miles per hour, and gentoos, the fastest type of penguin, can go as fast as 20 miles per hour."
    },
    {
        id: 383,
        fact: "Penguins can dive down over 800 feet. In the deepest dive ever recorded by the Australian Antarctic Program, an emperor penguin reached 1,850 feet."
    },
    {
        id: 384,
        fact: "Along the coast of southern Africa, African penguins live in large colonies. They use their own poop, called guano, to build nests under bushes and rocks."
    },
    {
        id: 385,
        fact: "Although penguins are associated with cold weather, penguins do not live at the North Pole. And 14 species of penguins actually live in warm or temperate climates!"
    },
    {
        id: 386,
        fact: "Penguins can drink saltwater."
    },
    {
        id: 387,
        fact: "Emperor penguins are excellent at holding their breath. While most penguin species can hold their breath for two to three minutes while underwater, the emperor penguin can hold his breath for up to 20 minutes!"
    },
    {
        id: 388,
        fact: "Penguins and their mates take very good care of their eggs. The father penguin protects the egg, while the mother penguin goes in search of food."
    },
    {
        id: 389,
        fact: "Baby penguins are called chicks."
    },
    {
        id: 390,
        fact: "When a penguin finds his mate, the duo will sing to each other so they can recognize their voices."
    },
    {
        id: 391,
        fact: "A cow has 32 teeth."
    },
    {
        id: 392,
        fact: "A cow will chew about 50 times in a minute, making their jaws move about 40,000 times a day."
    },
    {
        id: 393,
        fact: "The main stomach of a cow, the rumen, holds up to 50 gallons of food that has been partially digested."
    },
    {
        id: 394,
        fact: "Cows have with a visual field of 330° almost an all-around view."
    },
    {
        id: 395,
        fact: "Compared to the hearing of humans, the hearing ability of cows is better in the deep and high frequency ranges."
    },
    {
        id: 396,
        fact: "Cows can only sleep for 4 hours a day."
    },
    {
        id: 397,
        fact: "The natural life expectancy of a cow is around twenty years."
    },
    {
        id: 398,
        fact: "A bathtub can hold between 30 and 50 gallons of water. Did you know that a cow can drink that much water in just one day?"
    },
    {
        id: 399,
        fact: "With all of the eating and drinking that a cow does in one day, they will urinate about 30 gallons and produce about 60 pounds of manure."
    },
    {
        id: 400,
        fact: "A cow will stand up and lay down about fourteen times a day."
    },
    {
        id: 401,
        fact: "Sheep have rectangular pupils."
    },
    {
        id: 402,
        fact: "Sheep are highly social animals."
    },
    {
        id: 403,
        fact: "Sheep can see over 300° around themselves due to monocular vision."
    },
    {
        id: 404,
        fact: "A sheep can produce between two and 30 pounds of wool a year, and one pound of wool from sheep can make 10 miles of yarn."
    },
    {
        id: 405,
        fact: "The sheep milk has higher levels of calcium, vitamins A, B and E, protein, higher levels of fat, riboflavin, zinc, niacin, and thiamine compared to the goat and cow milk."
    },
    {
        id: 406,
        fact: "Sheep do not have any teeth in their upper front jaw. They have 24 molars and 8 incisors in total."
    },
    {
        id: 407,
        fact: "Sheep can recognize around 50 different sheep or human faces for years."
    },
    {
        id: 408,
        fact: "Sheep are known to treat themselves when they suffer from some illnesses. They eat specific plants that can cure them."
    },
    {
        id: 409,
        fact: "Almost the entire landmass lies within the Antarctic Circle."
    },
    {
        id: 410,
        fact: "The word ‘Antarctica’ means ‘opposite the Arctic,’ Earth’s northernmost region. Antarctica is completely encircled by the Southern Ocean."
    },
    {
        id: 411,
        fact: "There are two types of camels: One humped or “dromedary” camels and two humped Bactrian camels."
    },
    {
        id: 412,
        fact: "Camels can easily carry an extra 200 pounds and can walk about 20 miles a day through the harsh desert climate."
    },
    {
        id: 413,
        fact: "Camels have thick lips which let them forage for thorny plants other animals can’t eat."
    },
    {
        id: 414,
        fact: "Camels can completely shut their nostrils during sandstorms."
    },
    {
        id: 415,
        fact: "Camels can completely shut their nostrils during sandstorms."
    },
    {
        id: 416,
        fact: "Thanks to thick pads of skin on their chest and knees, camels can comfortably sit in very hot sand."
    },
    {
        id: 417,
        fact: "When a camel finally does find water, he can drink up to 40 gallons in one go."
    },
    {
        id: 418,
        fact: "Mother camels carry their calves up to 14 months before giving birth."
    },
    {
        id: 419,
        fact: "There are over 160 words for camel in Arabic alone."
    },
    {
        id: 420,
        fact: "There are almost 300 \"lion\" names only in Arabic!"
    },
    {
        id: 421,
        fact: "Some calves are born completely white and turn brown as their adult coat comes in."
    },
    {
        id: 422,
        fact: "Pigs are smarter than dogs."
    },
    {
        id: 423,
        fact: "Pigs can't fly, but they can run and swim!"
    },
    {
        id: 424,
        fact: "Pigs have excellent memories."
    },
    {
        id: 425,
        fact: "Mother pigs sing to their babies."
    },
    {
        id: 426,
        fact: "Pigs are the only animals that never see the sky."
    },
    {
        id: 427,
        fact: "You can't breathe and swallow simultaneously."
    },
    {
        id: 428,
        fact: "Babies don't have kneecaps."
    },
    {
        id: 429,
        fact: "Sharp knives are safer than dull knives."
    },
    {
        id: 430,
        fact: "Taking aspirin during a heart attack may save your life."
    },
    {
        id: 431,
        fact: "Women can give birth after they die."
    },
    {
        id: 432,
        fact: "High heels were first designed for men."
    },
    {
        id: 433,
        fact: "Women have more pain receptors than men. And they have a higher tolerance for pain than men do."
    },
    {
        id: 434,
        fact: "Many phones attach GPS data to your photos by default."
    },
    {
        id: 435,
        fact: "More than half of your bones are located in the hands, wrists, feet, and ankles"
    },
    {
        id: 436,
        fact: "Every second, your body produces 25 million new cells. That means in 15 seconds, you will have produced more cells than there are people in the United States."
    },
    {
        id: 437,
        fact: "The largest bone in the human body is the femur, also known as the thigh bone."
    },
    {
        id: 438,
        fact: "There is anywhere between 60,000-100,000 miles of blood vessels in the human body. If they were taken out and laid end-to-end, they would be long enough to travel around the world more than three times."
    },
    {
        id: 439,
        fact: "Teeth are considered part of the skeletal system, but are not counted as bones."
    },
    {
        id: 440,
        fact: "About 60% of your body is made up of water."
    },
    {
        id: 441,
        fact: "It takes about 66 days for an average individual to make something a daily habit."
    },
    {
        id: 442,
        fact: "Studies say that individuals who could instinctively use sarcasm to tackle a frivolous question have healthy minds."
    },
    {
        id: 443,
        fact: "We can udnretsnad any msseed up stnecene as lnog as the lsat and frsit lteerts of wdros are in crrcoet palecs. Suhc as tihs stnecene. "
    },
    {
        id: 444,
        fact: "Yawning to have someone else’s yawn is a normal phenomenon, despite not feeling exhausted or asleep."
    },
    {
        id: 445,
        fact: "An average individual’s mind wanders 30% of the time."
    },
    {
        id: 446,
        fact: "During the 7 minutes of neural activity you will have before dying, you will see your memories in a dreamlike pattern."
    },
    {
        id: 447,
        fact: "The way an individual treats the employees at an establishment tells immensely about their character."
    },
    {
        id: 448,
        fact: "Food prepared by someone else tastes much better than your own preparation, even when you use the same recipe."
    },
    {
        id: 449,
        fact: "Hearing a single negative thing could damage at least five positive memories."
    },
    {
        id: 450,
        fact: "Men aren’t more entertaining than women: they only make more jokes, they don’t care whether others like their humour or not."
    },
    {
        id: 451,
        fact: "People in blue rooms are also much more productive."
    },
    {
        id: 452,
        fact: "People are much more likely to return a missing wallet if a picture of a child is found inside."
    },
    {
        id: 453,
        fact: "Smart people tend to have fewer mates than the average person. The smarter the individual, the more selective they become."
    },
    {
        id: 454,
        fact: "People who speak two languages can unintentionally change their personalities when they switch to speak from one language to another."
    },
    {
        id: 455,
        fact: "People would rather change the truth than change their views about people."
    },
    {
        id: 456,
        fact: "Being alone is harder for your health than you really believe."
    },
    {
        id: 457,
        fact: "People between the ages of 18 and 33 are the highest percentage to have depression in the world."
    },
    {
        id: 458,
        fact: "Studies found that people who are in a position of influence and power are very poor in determining other people’s emotions. "
    },
    {
        id: 459,
        fact: "People are more likely to blame someone in the case when something negative happens."
    },
    {
        id: 460,
        fact: "Larger groups make worse and more subjective choices than smaller groups of people."
    },
    {
        id: 461,
        fact: "We would like to break more laws if one law is too strict."
    },
    {
        id: 462,
        fact: "Our minds are working on making boring speeches more exciting."
    },
    {
        id: 463,
        fact: "You’re conditioned to enjoy the songs you’ve most listened to in high school."
    },
    {
        id: 464,
        fact: "People who view crime shows and films have consistently overestimated the frequency of crime in the real world."
    },
    {
        id: 465,
        fact: "Some people live their lives as if they were in a reality television show."
    },
    {
        id: 466,
        fact: "The sort of music you listen to influences the way you view the world."
    },
    {
        id: 467,
        fact: "Being happy around people makes you happier."
    },
    {
        id: 468,
        fact: "97% of people write their own name when given a new pen."
    },
    {
        id: 469,
        fact: "Researchers are thinking of adding Internet addiction to the general list of psychiatric illnesses."
    },
    {
        id: 470,
        fact: "The average high school student now has the same level of anxiety as compared to the average psychiatric ward inmate in the early 1950s."
    },
    {
        id: 471,
        fact: "No one born blind has ever had schizophrenia."
    },
    {
        id: 472,
        fact: "Your choices are more logical because you think about another language."
    },
    {
        id: 473,
        fact: "A hug longer than twenty seconds will produce hormones into your body that makes you trust the individual who is hugging you."
    },
    {
        id: 474,
        fact: "People are franker because they’re emotionally drained. That’s why people mention things in late-night talks."
    },
    {
        id: 475,
        fact: "People seem to respect items more when they assemble them on their own, also partially named after the furniture from the renowned store, the ‘IKEA effect.’"
    },
    {
        id: 476,
        fact: "We often think more about a person than a catastrophic event that might happen."
    },
    {
        id: 477,
        fact: "By taking study notes in longhand, your brain is able to remember because writing exactly what you study help you retain better knowledge."
    },
    {
        id: 478,
        fact: "It is easier to remember how a story started as well as concluded than it’s middle."
    },
    {
        id: 479,
        fact: "You’ll feel more happy spending your money on others and than on yourself."
    },
    {
        id: 480,
        fact: "Taking your decisions by thinking in a foreign language can help you be more rational."
    },
    {
        id: 481,
        fact: "Narcissistic Personality Disorder has been found in around 6% of the population."
    },
    {
        id: 482,
        fact: "Psychologists have also found that the color blue can work as an appetite suppressant."
    },
    {
        id: 483,
        fact: "Letting yourself to feel the negative emotions and feelings related to an event in your life might actually help you move past it faster."
    },
    {
        id: 484,
        fact: "Sarcasm is a sign of a healthy brain."
    },
    {
        id: 485,
        fact: "The American Institute of Stress reports 120,000 people die every year as a direct result of work-related stress."
    },
    {
        id: 486,
        fact: "Sixty percent of the human brain is made of fat."
    },
    {
        id: 487,
        fact: "Your brain isn't fully formed until age 25."
    },
    {
        id: 488,
        fact: "Your brain's storage capacity is considered virtually unlimited."
    },
    {
        id: 489,
        fact: "Brain information travels up to an impressive 268 miles per hour."
    },
    {
        id: 490,
        fact: "On average, your spinal cord stops growing at 4 years old."
    },
    {
        id: 491,
        fact: "The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body."
    },
    {
        id: 492,
        fact: "Brains are made of soft tissue, which includes gray and white matter, containing the nerve cells, non-neuronal cells (which help to maintain neurons and brain health), and small blood vessels."
    },
    {
        id: 493,
        fact: "The Nazi flag was the the swastika rotated and without the dots. The Nazis were not very peaceful which is what the original swastika meant."
    },
    {
        id: 494,
        fact: "Hitler could have been a good artist, but then got into politics. We all know how that ended."
    },
    {
        id: 495,
        fact: "The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion meaning the iron heats up, the particles gain kinetic energy and take up more space."
    },
    {
        id: 496,
        fact: "Trypophobia is the fear of closely-packed holes."
    },
    {
        id: 497,
        fact: "Autralia is wider than the moon."
    },
    {
        id: 498,
        fact: "It is impossible for most people to lick their own elbow."
    },
    {
        id: 499,
        fact: "Stop signs used to be yellow."
    },
    {
        id: 500,
        fact: "You might be drinking water that is older than the solar system"
    },
    {
        id: 501,
        fact: "YouTube uploads 72 hours of video every single minute."
    },
    {
        id: 502,
        fact: "A single Google query uses 1,000 computers in 0.2 seconds to retrieve an answer."
    },
    {
        id: 503,
        fact: "Twitter has over 250 million users."
    },
    {
        id: 504,
        fact: "the term SURFING the internet was coined in 1992 by New York librarian Jean Armor Polly aka Net Mom."
    },
    {
        id: 505,
        fact: "The Internet hit 4.3 billion users in 2019."
    },
    {
        id: 506,
        fact: "60% of Internet use is mobile."
    },
    {
        id: 507,
        fact: "The Internet was invented over 40 years ago, in a beer garden! Who says the best ideas don’t come over a drink!"
    },
]


// Getting all the fun facts
app.get('/', (req, res) => {
    res.status(200);
    res.send(JSON.stringify(facts));
})

// Getting a fact by its id
app.get('/:id', (req, res) => {
    // Checking if the id is found on the server (The value fact returns a boolean [True or False])
    const fact = facts.find(f => f.id === parseInt(req.params.id));
    // If the id given is not found. The server will automatically throw an 404 error and an error message
    if (!fact) res.status(404).send('<h1>The id given doesn\'t match with any of the ids on the list!</h1>');
    // If the id given was found. The server will throw a success HTTP code (200) and the data will be shown on the UI of the website
    res.send(fact).status(200);
})

// Creating a PORT variable so the app will run on the PORT given in the environment variables, and if it's not given. The server will start at the PORT 3000 if it is not busy
const PORT = process.env.PORT || 3000;
// Listening to the PORT given in the PORT variable. And logging in the console that the server is listening to a PORT
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))