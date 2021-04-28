var diff = [
    'Challenge yourself with something you know you could never do, and what you’ll find is that you can overcome anything',
    'Beauty is hidden in everything, just learn how to observe',
    'When you reach the heart of life you shall find beauty in all things, even in the eyes that are blind to beauty',
    'The love of beauty in its multiple forms is the noblest gift of the human cerebrum',
    'Beauty in things exists in the mind which contemplates them',
    'Life is better when you stop criticizing the faults, instead, look for the beauty in the flaws',
    'The best way to predict the future is to invent it',
    'If you cannot do great things, do small things in a great way',
    'Life is 10% what happens to me and 90% how I react to it',
    'Though we travel the world over to find the beautiful, we must carry it with us or we find it not'
]

function dayQuote() {
    var rand = Math.floor(Math.random() * (diff.length));
    document.getElementById('quote').innerHTML = diff[rand];
}