const productList = [
    {
        name: "White Bread & White Coffee",
        description: "An ethereal pairing of artisanally sliced white bread, kissed by the warmth of a vintage toaster, and accompanied by a porcelain cup of elegantly pale white coffee—because subtlety is the new extravagance.",
        price: 10,
    },
    {
        name: "White Bread & Black Coffee",
        description: "The minimalist’s breakfast of champions: classic white bread with the bold bitterness of a deep, existentially dark roast. A contrast so stark, it’s practically modern art.",
        price: 9,
    },
    {
        name: "Brown Bread & White Coffee",
        description: "Hearty, wholesome brown bread, probably healthy—paired with a creamy white coffee that whispers sophistication with every sip. It’s what a thoughtful morning tastes like.",
        price: 10,
    },
    {
        name: "Brown Bread & Black Coffee",
        description: "An introspective duo: nutty brown bread with the kind of black coffee that stares into your soul and asks if you’re really okay. A breakfast for thinkers.",
        price: 9,
    },
    {
        name: "Black Bread & White Coffee",
        description: "Charcoal-hued bread with mysterious origins, rumored to be forged in the shadow of a forgotten volcano. Balanced perfectly with smooth white coffee for those who embrace the yin and the yang before 9am.",
        price: 10,
    },
    {
        name: "Black Bread & Black Coffee",
        description: "An all-black ensemble: brooding bread and brooding brew. It doesn’t get darker than this—except maybe your sense of humor. Recommended for poets and people who own too many turtlenecks.",
        price: 9,
    },
    {
        name: "Magenta Bread & White Coffee",
        description: "Vivid magenta bread that defies logic, tradition, and several FDA recommendations—served with a calming cup of white coffee to keep the universe balanced. Breakfast for the bold and possibly unhinged.",
        price: 10,
    },
    {
        name: "Magenta Bread & Black Coffee",
        description: "An audacious clash of color and caffeine: neon magenta bread that looks like it was born in a pop art exhibit, served with black coffee so strong it could file your taxes. Pure, chaotic elegance.",
        price: 9,
    }
    
];

function generatePageHTML(productList) {
    let pageHTML = '<h2 class="content-title">Menu</h2><ul class="product-list">';

    for (const product of productList) {
        pageHTML += `<li class="product">
        <h3 class="product-name">${product.name}</h3>
        <p class="content-description">
            ${product.description}
        </p>
        <p class="product-price">Only for: ${product.price}$!</p>
        </li>`;
    }
    pageHTML += '</ul>';
    return pageHTML;
}



export default generatePageHTML(productList);

/*
white bread + white coffee
white bread + black coffee
brown bread + white coffee
brown bread + black coffee
black bread + white coffee
black bread + black coffee
magenta bread + white coffee
magenta bread + black coffee
*/