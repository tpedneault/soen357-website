<script setup>
import personas from '@/assets/personas.json'
import mockups from '@/assets/mockups.json'
import PersonaCard from '@/components/PersonaCard.vue'
import MockupSection from '@/components/MockupSection.vue'

console.log(mockups);
</script>

<template>
  <div class="w-screen flex flex-col pb-16">
    <div class="w-full h-fit p-16 flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div class="text-white m-auto text-[3rem] font-lilyscript">Seniority</div>
      <div class="mx-auto text-white text-[1.5rem] font-jakarta font-bold mt-4">Connecting Generations, Creating Communities</div>
    </div>
    <div class="px-32 pt-12 font-jakarta flex flex-col gap-2">
      <div class="font-bold text-xl mb-1.5 text-indigo-500">Introduction</div>
      <div>In the golden years of life, the pursuit of passions, the sharing of stories, and the joy of companionship remain as vital as ever. Seniority seeks to become a beacon for the elderly, illuminating the path to a vibrant community right at their fingertips. Our project is driven by the core objective of providing a nurturing platform where the elderly can effortlessly connect with individuals who resonate with their life experiences, share similar hobbies, and are eager to share and listen to each other's tales.</div>
      <div>At the heart of Seniority is a diverse range of communities waiting to be explored. Whether it's gardening enthusiasts exchanging tips, travel aficionados reminiscing about their journeys, or book lovers diving into engaging discussions, there's a space for every interest. The essence of Seniority lies in its simplicity of use, ensuring that everyone—regardless of their technical savvy—can navigate the platform with ease and confidence. Our intuitive design is geared towards facilitating seamless interactions, making the discovery of new friends and intriguing discussions a delightful experience.</div>
      <div>Innovation at Seniority goes beyond connecting individuals. We harness the power of artificial intelligence to foster a supportive digital environment. Meet Earl, your friendly AI chatbot, always at your service to assist in navigating the application. Whether you need help joining a community, starting a conversation, or finding an event to attend, Earl is here to guide you every step of the way. Our innovative use of technology aims to eliminate any barriers to enjoying a fulfilling social life online.</div>
      <div>Seniority is not just a platform; it’s a doorway to a world where every story is cherished, every hobby is celebrated, and every interaction is a step towards forging meaningful connections. We invite you to join us in this exciting endeavor, as we redefine what social engagement means for the elderly. Your journey of exploration and friendship begins with Seniority, where every day brings new stories to share, lessons to learn, and friendships to forge. Welcome to a community where your wisdom is valued, your interests are shared, and your stories live on. Welcome to Seniority.</div>
    </div>
    <div class="px-32 pt-8 font-jakarta flex flex-col gap-2">
      <div class="font-bold text-xl mb-1.5 text-indigo-500">Relevant Statistics</div>
      <div>Here are some of our findings regarding the target population. These facts and statistics were used during the development of our design to come up with a user flow targeted towards the elderly.</div>
      <ul class="list-disc">
        <li class="ml-12">The life expectancy in Canada is rising at a rate of <b>0.18% each year</b>, currently sitting at <b>82.96 years</b>. This statistic shows the need to create applications tailored to the elderly. <a class="font-medium text-indigo-500" href="https://www.macrotrends.net/countries/CAN/canada/life-expectancy">Source</a></li>
        <li class="ml-12">The acceptance and adoption of technlogies have been limited due to the lack of elder-friendly design and complicated user interfaces. This fact highlights the need for innovation in the field. <a class="font-medium text-indigo-500" href="https://link.springer.com/article/10.1007/s10209-021-00856-6#:~:text=The%20low%20acceptance%20levels%20of,them%20to%20use%20mobile%20applications">Source</a></li>
        <li class="ml-12">Smartphone usage among the elderly is increasing, from 2019 to 2020, there was an increase in ownership of <b>10.1%</b> within the 65 to 75 age group. This statistic  shows that there is an increasing demand for this type of social media platform. <a class="font-medium text-indigo-500" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9038938/#:~:text=The%20proportion%20of%20older%20adults,.001">Source</a></li>
        <li class="ml-12">The prevalance of severe loneliness during the pandemic was <b>21%</b>, compared to <b>6%</b> prior to the pandemic. This statistic shows the need to facilitate access to communities for the elderly. <a class="font-medium text-indigo-500" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8508181/#:~:text=We%20found%20the%20prevalence%20of,19">Source</a></li>
      </ul>
    </div>
    <div class="px-32 pt-8 font-jakarta flex flex-col gap-2">
      <div class="font-bold text-xl text-indigo-500">Current Market</div>
      <div>In the realm of digital socialization and community engagement, several platforms have already established a strong foothold. As we venture into this domain with Seniority, it's imperative to acknowledge and analyze the competitive landscape. The main competitors to Seniority include Facebook, Skype, and Twitter. Here's how they stack up:</div>
      <ul>
        <li class="font-bold text-lg my-1.5 text-indigo-500">Facebook</li>
        <ul>
          <li class="pb-2"><p class="font-bold pb-2">Community Engagement</p> Facebook excels in fostering communities through Groups and Pages, where individuals can rally around shared interests, causes, or experiences.</li>
          <li class="pb-2"><p class="font-bold pb-2">User Demographics</p> With its broad user base, Facebook hosts a significant number of elderly users who utilize the platform to stay connected with family and friends.</li>
          <li class="pb-2"><p class="font-bold pb-2">Features</p> The platform offers a variety of engagement features such as text, photo, and video sharing, live streaming, and event planning, which cater to diverse user preferences.</li>
          <li class="pb-2"><p class="font-bold pb-2">Challenges</p> Despite its extensive functionality, Facebook's interface can be perceived as cluttered or overwhelming, especially for users who are not tech-savvy.</li>
        </ul>
        <li class="font-bold text-lg my-1.5 text-indigo-500">Skype</li>
        <ul>
          <li class="pb-2"><p class="font-bold pb-2">Communication</p> Skype is primarily known for video and voice calling, providing a platform for personal and intimate conversations.</li>
          <li class="pb-2"><p class="font-bold pb-2">Ease of Use</p> The straightforward interface makes it relatively easy for the elderly to navigate and use for communication.</li>
          <li class="pb-2"><p class="font-bold">Challenges</p> Skype lacks the community-building aspect. It is more geared towards one-on-one or small group interactions rather than fostering larger communities around shared interests.</li>
        </ul>
        <li class="font-bold text-lg my-1.5 text-indigo-500">Twitter</li>
        <ul>
          <li class="pb-2"><p class="font-bold pb-2">Real-Time Interaction</p> Twitter is a platform for real-time dialogue and trending discussions, allowing users to engage in current events and topical conversations.</li>
          <li class="pb-2"><p class="font-bold pb-2">Accessibility</p> The platform's character limit on posts encourages concise communication, which might be appealing to some users.</li>
          <li class="pb-2"><p class="font-bold pb-2">Challenges</p> The fast-paced nature of Twitter may not cater to the preferences of the elderly who may seek a more relaxed or intimately engaging environment. Additionally, building a sense of community may be more challenging due to the platform's broad and global user base.</li>
        </ul>
      </ul>
      <div>Seniority stands out from these competitors by providing an experience tailored to the elderly. Ensuring that the user experience is satisfying for our users. The inclusion of Earl also sets Seniority apart from our competitors, the guidance and support provided by the chatbot aids in navigating the user interface. One of our main focus is the community building aspect. During isolation, the elderly were socially isolated from the rest of society. Especially in their golden ages, it is important that they get to create new bonds and stimulate themselves through captivating activities.</div>
    </div>
    <div class="px-32 pt-8 font-jakarta flex flex-col">
      <div class="font-bold text-xl mb-1.5 text-indigo-500">Personas</div>
      <div class="">To gain deeper insights into our user base, we conducted thorough research to better comprehend the desires and requirements of our clientele. As a result of this research, we've created User Personas, which serve as representations of the various user profiles for whom we've designed Seniority.</div>
      <div class="mt-8 mb-4 mx-auto text-[1.3rem] font-bold">Meet our Personas!</div>
      <div class="flex flex-row mx-auto gap-6 py-4">
        <PersonaCard v-for="persona in personas.Personas" v-bind:key="persona.Name" :persona="persona"/>
      </div>
      <div class="mt-4">
        Drawing from the insights gathered from these personas, we have elected to design the application such that the user interface remains uniform across different pages. This design choice facilitates a quick familiarization process for users, all the while upholding a high degree of usability. We have also chosen to steer clear of intricate menus. The desired functionality should be readily visible on the page, eliminating the need for users to navigate through convoluted menus.
        Additionally, we've taken measures to ensure that key UI elements are easily distinguishable, the font is legible and adequately large, and accessibility features like speech-to-text and text-to-speech are integrated. These features afford users a variety of interaction avenues with the application. The presence of our chatbot, Earl, significantly enhances user experience. Should a user find themselves bewildered, unable to locate a certain community or user, they can simply click on the search box available on every page.
        Upon clicking this textbox, the Earl chat interface is launched, allowing users to engage with the chatbot in a conversational manner, akin to interacting with another human. Based on the dialogue, Earl will present a set of recommendations from which the user can choose, making the navigation process more user-friendly and engaging.
        These design decisions, based from our personas, enable people who are unfamiliar with technology and the more technically savy people to use the application the way they want to.
      </div>
    </div>
    <div class="px-32 pt-8 font-jakarta flex flex-col gap-4">
      <div class="font-bold text-xl mb-1.5 text-indigo-500">User Flow</div>
      <img class="mx-auto w-[40%]" src="@/assets/flow_1.png"/>
      <img class="mx-auto w-[40%]" src="@/assets/flow_2.png"/>
      <img class="mx-auto w-[40%]" src="@/assets/flow_3.png"/>
    </div>
    <div class="px-32 pt-8 font-jakarta flex flex-col">
      <div class="font-bold text-xl mb-1.5 text-indigo-500">User Journeys</div>
      <img class="mx-auto w-[50%]" src="@/assets/journey_1.png"/>
      <img class="mx-auto w-[50%]" src="@/assets/journey_2.png"/>
      <img class="mx-auto w-[50%]" src="@/assets/journey_3.png"/>
    </div>
    <div class="px-32 pt-8 font-jakarta flex flex-col">
      <div class="font-bold text-xl mb-1.5 text-indigo-500">Initial Design</div>
      <div class="font-bold text-lg my-1.5 text-indigo-500">Style and Design Decisions</div>
      <p class="mb-2">In this project, we aim to explore a new way of interacting with a mobile application. Instead of using menus and gestures for navigation, we want users to navigate through conversation. This new approach has several benefits. Firstly, it makes the app more accessible to users with hearing, visual, and motor challenges. Secondly, it provides less tech-savvy users with a more familiar interface, while still retaining the traditional navigation methods like menus and gestures for those who prefer them. The main tool for navigation in the app is the Earl chatbot. As shown in the mockup, most pages have a search bar at the top, always in the same spot, where users can start a conversation. The message in the box changes based on the page, giving users a hint about the purpose of the page.</p>
      <MockupSection v-for="mockup in mockups.Mockups" v-bind:key="mockup.Title" :info="mockup" />
    </div>
    <div class="px-32 pt-8 font-jakarta flex flex-col">
      <div class="font-bold text-xl mb-1.5 text-indigo-500">Styling Decisions</div>
      <div class="font-bold text-lg my-1.5 text-indigo-500">Inspirations</div>
      <p class="mb-2">The UI draws inspiration from the neobrutalist style, known for its high contrast and modern aesthetic. We find this style to be particularly suitable for our elderly user base as it accentuates the interactable elements on each page, making them more noticeable and easier to engage with. The bold lines and clear demarcations inherent in neobrutalist design help in reducing visual clutter, thereby simplifying navigation and improving the overall user experience. Moreover, the modern flair of this style brings a fresh, contemporary feel to the application, making it appealing not just to our primary target audience, but potentially to a broader user base. By employing a neobrutalist design approach, we aim to combine stark visual clarity with a modern aesthetic to create a user interface that is both functional and visually captivating.</p>
      <div class="font-bold text-lg my-1.5 text-indigo-500">Fonts</div>
      <p class="mb-2">For the font, we've decided to use the Jakarta Sans font, as it embodies a smooth, clear, and modern aesthetic. Particularly when crafting an application for the elderly, it's vital to choose a font that is easily readable and visually appealing to ensure a user-friendly experience. Jakarta Sans boasts a simple and legible character design, which is crucial for minimizing visual strain and ensuring that the text is easily decipherable, even for users with visual impairments. Furthermore, its modern yet timeless design complements the overall user interface, enhancing the visual coherence of the application. By opting for Jakarta Sans, we aim to strike a balance between aesthetic appeal and functional readability, making the application not only usable but also visually engaging for our target audience.</p>
    </div>
  </div>
</template>

<style scoped>
</style>
