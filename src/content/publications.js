import imgYupPrimary from 'images/publications/yup_bw.png';
import imgYupJpg from 'images/publications/yup_bw.png';

import imgCidrPrimary from 'images/publications/cidr_bw.png';
import imgCidrJpg from 'images/publications/cidr_bw.png';

export default [
    {
        image: {
            primary: imgCidrPrimary,
            fallback: imgCidrJpg,
        },
        title: "Converting CIDR Block to IP Range in Your Head in 9 Seconds",
        snippet: "I frequently come across people that use online CIDR tools whenever they need to calculate an IP range for a CIDR block.",
        href: "https://medium.com/@arkadyt/calculating-cidr-block-range-in-your-head-in-9-seconds-f344f22ce34d",
    },
    {
        image: {
            primary: imgYupPrimary,
            fallback: imgYupJpg,
        },
        title: "How Does yup.addMethod() Work? Creating Custom Validation Functions With Yup",
        snippet: "Yup’s documentation is pretty vague about creating custom validation functions and the role of .addMethod() in it.",
        href: "https://medium.com/@arkadyt/how-does-yup-addmethod-work-creating-custom-validation-functions-with-yup-8fddb71a5470",
    }
];
