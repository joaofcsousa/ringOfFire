
var cards = [
  { suit: "diamonds", value: "Ace", description: "Everyone should keep drinking until the person who picked the card stops.", imagePath: "../../resources/Cards/diamonds-ace.png" },
  { suit: "diamonds", value: "2", description: "The player who drew the card picks someone to drink.", imagePath: "../../resources/Cards/diamonds-2.png" },
  { suit: "diamonds", value: "3", description: "The player who drew the card drinks.", imagePath: "../../resources/Cards/diamonds-3.png" },
  { suit: "diamonds", value: "4", description: "All the players that don't identify as male must drink.", imagePath: "../../resources/Cards/diamonds-4.png" },
  { suit: "diamonds", value: "5", description: "When you put your thumb on the table everyone must follow and whomever is last must drink. ", imagePath: "../../resources/Cards/diamonds-5.png" },
  { suit: "diamonds", value: "6", description: "All that don't identify as female must drink.", imagePath: "../../resources/Cards/diamonds-6.png" },
  { suit: "diamonds", value: "7", description: "Point your finger in the sky, whoever is last must drink.", imagePath: "../../resources/Cards/diamonds-7.png" },
  { suit: "diamonds", value: "8", description: "Choose someone to drink with you. Your drinking buddy, should always drink with you.", imagePath: "../../resources/Cards/diamonds-8.png" },
  { suit: "diamonds", value: "9", description: "Pick a word and the person next to you must rhyme with that word, it goes to the next person and the next, in a circle, until someone messes up, that person drinks.", imagePath: "../../resources/Cards/diamonds-9.png" },
  { suit: "diamonds", value: "10", description: "Pick a category, go in a circle and everyone has to say a word that fits that category. Whoever messes up, drinks.", imagePath: "../../resources/Cards/diamonds-10.png" },
  { suit: "diamonds", value: "Jack", description: "You can make up any rule that everyone has to follow. Whoever disobeys, drinks.", imagePath: "../../resources/Cards/diamonds-jack.png" },
  { suit: "diamonds", value: "Queen", description: "You become the question master, and if anybody answers a question asked by you, they have to drink. This applies to ANY question.", imagePath: "../../resources/Cards/diamonds-queen.png" },
  { suit: "diamonds", value: "King", description: "The player who drew the card must pour some of drink into the cup in the middle. The person to draw the last King has to drink whatever is in the cup in the middle.", imagePath: "../../resources/Cards/diamonds-king.png" },
  { suit: "diamonds", value: "Joker", description: "Johnny Cash had been active in the music industry for over a decade when he released Ring of Fire in 1963. To commemorate that drink 10 times!", imagePath: "../../resources/Cards/diamonds-joker.png"},
  { suit: "hearts", value: "Ace", description: "Everyone should keep drinking until the person who picked the card stops.", imagePath: "../../resources/Cards/hearts-ace.png" },
  { suit: "hearts", value: "2", description: "The player who drew the card picks someone to drink.", imagePath: "../../resources/Cards/hearts-2.png" },
  { suit: "hearts", value: "3", description: "The player who drew the card drinks.", imagePath: "../../resources/Cards/hearts-3.png" },
  { suit: "hearts", value: "4", description: "All the players that don't identify as male must drink.v", imagePath: "../../resources/Cards/hearts-4.png" },
  { suit: "hearts", value: "5", description: "When you put your thumb on the table everyone must follow and whomever is last must drink. ", imagePath: "../../resources/Cards/hearts-5.png" },
  { suit: "hearts", value: "6", description: "All that don't identify as female must drink.", imagePath: "../../resources/Cards/hearts-6.png" },
  { suit: "hearts", value: "7", description: "Point your finger in the sky, whoever is last must drink.en", imagePath: "../../resources/Cards/hearts-7.png" },
  { suit: "hearts", value: "8", description: "Choose someone to drink with you. Your drinking buddy, should always drink with you.", imagePath: "../../resources/Cards/hearts-8.png" },
  { suit: "hearts", value: "9", description: "Pick a word and the person next to you must rhyme with that word, it goes to the next person and the next, in a circle, until someone messes up, that person drinks.v", imagePath: "../../resources/Cards/hearts-9.png" },
  { suit: "hearts", value: "10", description: "Pick a category, go in a circle and everyone has to say a word that fits that category. Whoever messes up, drinks.", imagePath: "../../resources/Cards/hearts-10.png" },
  { suit: "hearts", value: "Jack", description: "You can make up any rule that everyone has to follow. Whoever disobeys, drinks.", imagePath: "../../resources/Cards/hearts-jack.png" },
  { suit: "hearts", value: "Queen", description: "You become the question master, and if anybody answers a question asked by you, they have to drink. This applies to ANY question.", imagePath: "../../resources/Cards/hearts-queen.png" },
  { suit: "hearts", value: "King", description: "The player who drew the card must pour some of drink into the cup in the middle. The person to draw the last King has to drink whatever is in the cup in the middle.", imagePath: "../../resources/Cards/hearts-king.png" },
  { suit: "hearts", value: "Joker", description: "Rings of Fire by Johnny Cash was No. 1 on the country chart for seven weeks, so... drink 7 times!", imagePath: "../../resources/Cards/hearts-joker.png"},
  { suit: "spades", value: "Ace", description: "Everyone should keep drinking until the person who picked the card stops.", imagePath: "../../resources/Cards/spades-ace.png" },
  { suit: "spades", value: "2", description: "The player who drew the card picks someone to drink.", imagePath: "../../resources/Cards/spades-2.png" },
  { suit: "spades", value: "3", description: "The player who drew the card drinks.", imagePath: "../../resources/Cards/spades-3.png" },
  { suit: "spades", value: "4", description: "All the players that don't identify as male must drink.", imagePath: "../../resources/Cards/spades-4.png" },
  { suit: "spades", value: "5", description: "When you put your thumb on the table everyone must follow and whomever is last must drink. ", imagePath: "../../resources/Cards/spades-5.png" },
  { suit: "spades", value: "6", description: "All that don't identify as female must drink.", imagePath: "../../resources/Cards/spades-6.png" },
  { suit: "spades", value: "7", description: "Point your finger in the sky, whoever is last must drink.", imagePath: "../../resources/Cards/spades-7.png" },
  { suit: "spades", value: "8", description: "Choose someone to drink with you. Your drinking buddy, should always drink with you.", imagePath: "../../resources/Cards/spades-8.png" },
  { suit: "spades", value: "9", description: "Pick a word and the person next to you must rhyme with that word, it goes to the next person and the next, in a circle, until someone messes up, that person drinks.", imagePath: "../../resources/Cards/spades-9.png" },
  { suit: "spades", value: "10", description: "Pick a category, go in a circle and everyone has to say a word that fits that category. Whoever messes up, drinks.", imagePath: "../../resources/Cards/spades-10.png" },
  { suit: "spades", value: "Jack", description: "You can make up any rule that everyone has to follow. Whoever disobeys, drinks.", imagePath: "../../resources/Cards/spades-jack.png" },
  { suit: "spades", value: "Queen", description: "You become the question master, and if anybody answers a question asked by you, they have to drink. This applies to ANY question.", imagePath: "../../resources/Cards/spades-queen.png" },
  { suit: "spades", value: "King", description: "The player who drew the card must pour some of drink into the cup in the middle. The person to draw the last King has to drink whatever is in the cup in the middle.", imagePath: "../../resources/Cards/spades-king.png" },
  { suit: "spades", value: "Joker", description: "The song Rings of Fire by Johnny Cash was release in April 19, 1963 in honour of that, drink 19 times!", imagePath: "../../resources/Cards/spades-joker.png"},
  { suit: "clubs", value: "Ace", description: "Everyone should keep drinking until the person who picked the card stops.", imagePath: "../../resources/Cards/Cards/clubs-ace.png" },
  { suit: "clubs", value: "2", description: "The player who drew the card picks someone to drink.", imagePath: "../../resources/Cards/clubs-2.png" },
  { suit: "clubs", value: "3", description: "The player who drew the card drinks.", imagePath: "../../resources/Cards/clubs-3.png" },
  { suit: "clubs", value: "4", description: "All the players that don't identify as male must drink.", imagePath: "../../resources/Cards/clubs-4.png" },
  { suit: "clubs", value: "5", description: "When you put your thumb on the table everyone must follow and whomever is last must drink. ", imagePath: "../../resources/Cards/clubs-5.png" },
  { suit: "clubs", value: "6", description: "All that don't identify as female must drink.", imagePath: "../../resources/Cards/clubs-6.png" },
  { suit: "clubs", value: "7", description: "Point your finger in the sky, whoever is last must drink.", imagePath: "../../resources/Cards/clubs-7.png" },
  { suit: "clubs", value: "8", description: "Choose someone to drink with you. Your drinking buddy, should always drink with you.", imagePath: "../../resources/Cards/clubs-8.png" },
  { suit: "clubs", value: "9", description: "Pick a word and the person next to you must rhyme with that word, it goes to the next person and the next, in a circle, until someone messes up, that person drinks.", imagePath: "../../resources/Cards/clubs-9.png" },
  { suit: "clubs", value: "10", description: "Pick a category, go in a circle and everyone has to say a word that fits that category. Whoever messes up, drinks.", imagePath: "../../resources/Cards/clubs-10.png" },
  { suit: "clubs", value: "Jack", description: "You can make up any rule that everyone has to follow. Whoever disobeys, drinks.", imagePath: "../../resources/Cards/clubs-jack.png" },
  { suit: "clubs", value: "Queen", description: "You become the question master, and if anybody answers a question asked by you, they have to drink. This applies to ANY question.", imagePath: "../../resources/Cards/clubs-queen.png" },
  { suit: "clubs", value: "King", description: "The player who drew the card must pour some of drink into the cup in the middle. The person to draw the last King has to drink whatever is in the cup in the middle.", imagePath: "../../resources/Cards/clubs-king.png" },
  { suit: "clubs", value: "Joker", description: 'You have to Karaoke the song Rings of Fire by Johnny Cash! And drink! <a href=https://www.youtube.com/watch?v=1Ry7lMl75Vo target=“_blank”>Click here</a>.', imagePath: "../../resources/Cards/clubs-joker.png"}
]

var deck = cards;
var drawCards = []



function getDeck() {
      
    return cards;
  }
  


function drawCard() {
  var currentPage = window.location.pathname;
  var gamePage = "/gamePage.html";
  var hand = document.querySelector("#hand");
  if (currentPage.endsWith(gamePage)) {
    if (deck.length === 0) {
      deck = getDeck();
    }

    clearCards(hand);

    if (deck.length > 0) {
      var randomIndex = Math.floor(Math.random() * deck.length);
      var card = deck.splice(randomIndex, 1)[0];
      var imagePathing = "../../resources/Cards" + "/" + card.suit.toLowerCase() + "-" + card.value.toLowerCase() + ".png"

      if (card.value.toLowerCase() === "king" && deck.filter(c => c.value.toLowerCase() === "king").length === 0) {
        card.description = "Drink the cup in the middle.";
      }

      var cardDiv = document.createElement("div");
      
      cardDiv.classList.add("card");

      cardDiv.innerHTML = '<div class="flip-card">' +
      '<div class="flip-card-inner">' +
        '<div class="flip-card-front">' +
          '<img src="' + imagePathing + '" alt="Avatar" style="width:450px;height:600px;">' +
          '</div>' +
          '<div class="flip-card-back">' +
          '<p>' + card.description + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';


      var img = document.createElement("img");
      
      img.src = imagePathing;
      img.alt = card.value + " of " + card.suit;

      var isFlipped = false;


      img.addEventListener("click", function () {
        if (!isFlipped) {
  
          var flippedCardDiv = document.createElement("div");
          flippedCardDiv.classList.add("flipped-card");
          flippedCardDiv.style.width = img.width + "px";
          flippedCardDiv.style.height = img.height + "px";
      
          var descriptionDiv = document.createElement("div");
          descriptionDiv.classList.add("description");
          descriptionDiv.textContent = card.description;
      
          flippedCardDiv.appendChild(descriptionDiv);
      
  
          cardDiv.appendChild(flippedCardDiv);
      
          isFlipped = true;
        } else {
          img.src = "../../resources/Cards" + "/" + card.suit.toLowerCase() + "-" + card.value.toLowerCase() + ".png";
          descriptionDiv.style.display = "none";
          isFlipped = false;
        }
      });
    


      hand.appendChild(cardDiv);
    } else {
      var deckEndedDiv = document.createElement("div");
      deckEndedDiv.innerHTML = '<p id= "endOfDeck">The deck is finished. Click Draw Card to reset the deck.</p>';
      hand.appendChild(deckEndedDiv);
      
      document.getElementById("draw-card").addEventListener("click", function() {
        hand.innerHTML = "";
        window.location.href='gamePage.html'
      });
    }
  }
}

function clearCards(hand) {
  while (hand.firstChild) {
    hand.removeChild(hand.firstChild);
  }
}


  function addDrawCardEventListener() {
    var drawCardButton = document.querySelector('.draw-card');
    drawCardButton.addEventListener('click', drawCard);
  }
  
  window.addEventListener('load', addDrawCardEventListener);
  

  

$(document).ready(function() {
  $('.button-start').click(function() {
    window.location.href = 'rules.html';
  });

  $('.button-rules-next').click(function() {
   // window.location.href = 'playerPage.html';
   window.location.href = 'gamePage.html';
  });

  $('.button-rules-previous').click(function() {
    window.location.href = 'firstPage.html';
  });

  $('form').submit(function(e) {
    e.preventDefault();
    window.location.href = 'gamePage.html';
  });
  $('.end-game').click(function() {
    window.location.href = "endPage.html";
  });
  $('.restart').click(function() {
    window.location.href = "firstPage.html";
  });
});
