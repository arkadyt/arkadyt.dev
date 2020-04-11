import imgYupWebp from 'images/publications/yup.webp';
import imgYupJpg from 'images/publications/yup.jpg';

import imgCidrWebp from 'images/publications/cidr.webp';
import imgCidrJpg from 'images/publications/cidr.jpg';

export default [
    {
        image: {
            webp: imgCidrWebp,
            fallback: imgCidrJpg,
        },
        title: "Converting CIDR Block to IP Range in Your Head in 9 Seconds",
        snippet: "I frequently come across people that use online CIDR tools whenever they need to calculate an IP range for a CIDR block.",
        href: "https://medium.com/@arkadyt/calculating-cidr-block-range-in-your-head-in-9-seconds-f344f22ce34d",
    },
    {
        image: {
            webp: imgYupWebp,
            fallback: imgYupJpg,
        },
        title: "How Does yup.addMethod() Work? Creating Custom Validation Functions With Yup",
        snippet: "Yup’s documentation is pretty vague about creating custom validation functions and the role of .addMethod() in it.",
        href: "https://medium.com/@arkadyt/how-does-yup-addmethod-work-creating-custom-validation-functions-with-yup-8fddb71a5470",
    }
];
