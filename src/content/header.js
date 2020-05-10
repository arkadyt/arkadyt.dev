import bgImgWebp from 'images/backgrounds/bg7.webp';
import bgImgJpg from 'images/backgrounds/bg7.jpg';

import bgImgWebp_mbl from 'images/backgrounds/bg7_mbl.webp';
import bgImgJpg_mbl from 'images/backgrounds/bg7_mbl.jpg';

export default {
    image: {
        primary: bgImgWebp,
        fallback: bgImgJpg
    },
    imageMobile: {
        primary: bgImgWebp_mbl,
        fallback: bgImgJpg_mbl
    }
};
