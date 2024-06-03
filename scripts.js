const recommendations = {
    comedy: [
        { title: 'Mr. Monk', poster: 'a.jpg', trailer: 'https://youtu.be/Krfd3OWb4hs?si=g5cyiGRugOKXBA031' },
        { title: 'Munna Bhai MBBS', poster: 'b.jpg', trailer: 'https://youtu.be/6lCGvu-hwX4?si=vXfn3eOOv4bfvaWG' },
        { title: 'Ace Ventura', poster: 'c.jpg', trailer: 'URL_TO_TRAILER_3' },
        { title: 'Reply 1988', poster: 'd.jpg', trailer: 'URL_TO_TRAILER_4' },
        { title: 'Hera pheri', poster: 'a1.jpg', trailer: 'URL_TO_TRAILER_4' }
    ],
    romantics: [
        { title: 'Before We Go', poster: 'e.jpg', trailer: 'https://youtu.be/vNzaiGzPoUg?si=Zfb_72fK246OoUDY' },
        { title: 'Sanam Teri Kasam', poster: 'f.jpg', trailer: 'https://youtu.be/wPOgLvCC2S8?si=b5DvzEVL1v_fEFLa' },
        { title: 'The Notebook', poster: 'g.jpg', trailer: 'URL_TO_TRAILER_7' },
        { title: 'Call Me By Your Name', poster: 'h.jpg', trailer: 'URL_TO_TRAILER_8' },
        { title: 'Because This Is My First Life', poster: 'i.jpg', trailer: 'URL_TO_TRAILER_9' }
    ],
    romcom: [
        { title: 'Jab We Met', poster: 'j.jpg', trailer: 'https://www.youtube.com/watch?v=Z6cE7g9feSs' },
        { title: 'When Harry Met Sally', poster: 'k. .jpg', trailer: 'https://www.youtube.com/watch?v=-E10AcydCuk' },
        { title: 'Reply 1988', poster: 'd.jpg', trailer: 'URL_TO_TRAILER_4' },
        { title: 'Notting hill', poster: 'a2. .jpg', trailer: 'URL_TO_TRAILER_12' },
        { title: 'My Girlfriend Is a Gumiho', poster: 'm.jpg', trailer: 'URL_TO_TRAILER_13' }
    ],
    action: [
        { title: 'Terminator', poster: 'n.jpg', trailer: 'https://www.youtube.com/watch?v=oxy8udgWRmo' },
        { title: 'Captain America: Civil War', poster: 'o.jpg', trailer: 'https://www.youtube.com/watch?v=dKrVegVI0Us&t=8s' },
        { title: 'Avengers', poster: 'p.jpg', trailer: 'URL_TO_TRAILER_16' },
        { title: 'RRR', poster: 'q.jpg', trailer: 'URL_TO_TRAILER_17' },
        { title: 'K2', poster: 's.jpg', trailer: 'URL_TO_TRAILER_19' }
    ],
    drama: [
        { title: 'Bridgerton', poster: 't.jpg', trailer: 'https://www.youtube.com/watch?v=gpv7ayf_tyE' },
        { title: 'Panchayat', poster: 'u.jpg', trailer: 'https://www.youtube.com/watch?v=mojZJ7oeD_g' },
        { title: 'Heeramandi', poster: 'v.jpg', trailer: 'URL_TO_TRAILER_22' },
        { title: 'Anne with an E', poster: 'w.jpg', trailer: 'URL_TO_TRAILER_23' },
        { title: 'Queen of Tears', poster: 'x.jpg', trailer: 'URL_TO_TRAILER_24' }
    ],
    lighthearted_drama: [
        { title: 'Weightlifting Fairy Kim Bok-joo', poster: 'y.jpg', trailer: 'https://www.youtube.com/watch?v=tQM2aelaWzc' },
        { title: 'Ted Lasso', poster: 'z.jpg', trailer: 'https://www.youtube.com/watch?v=3u7EIiohs6U' },
        { title: 'Chalte Chalte', poster: '1a.jpg', trailer: 'URL_TO_TRAILER_27' },
        { title: 'Kotaro Lives Alone', poster: '2a.jpg', trailer: 'URL_TO_TRAILER_28' },
        { title: 'My first first love', poster: 'a3.jpg', trailer: 'URL_TO_TRAILER_28' }
    ],
    documentaries: [
        { title: 'The Elephant Whisperers', poster: '3a.jpg', trailer: 'https://www.youtube.com/watch?v=a0J0b_OVa9w' },
        { title: 'The Romantics', poster: '4a.jpg', trailer: 'https://www.youtube.com/watch?v=myG0f2RKizY' },
        { title: 'Life on Our Planet', poster: '5a.jpg', trailer: 'URL_TO_TRAILER_31' },
        { title: 'All We Imagine as Light', poster: 'a4.jpg', trailer: 'URL_TO_TRAILER_28' },
        { title: 'Mysteries of the Universe', poster: '6a.jpg', trailer: 'URL_TO_TRAILER_32' }
    ]


};

let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            setTimeout(() => nextSlide(currentSlide + 1), 200);
        });
    });
    document.querySelector('button').addEventListener('click', () => nextSlide(currentSlide + 1));
});

function nextSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n < slides.length) {
        slides[currentSlide].classList.remove('active');
        slides[n].classList.add('active');
        currentSlide = n;
    } else {
        showResult();
    }
}

function showResult() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
    };

    let recommendedCategory = '';

    if (answers.q5 == '0') {
        recommendedCategory = 'comedy';
    } else if (answers.q5 == '1') {
        recommendedCategory = 'romantics';
    } else if (answers.q5 == '2') {
        recommendedCategory = 'documentaries';
    } else if (answers.q5 == '3') {
        recommendedCategory = 'action';
    }

    const results = recommendations[recommendedCategory];
    localStorage.setItem('movieRecommendations', JSON.stringify(results));
    window.location.href = 'result.html';
}
