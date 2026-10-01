/* ==========================================
   TEACHER'S DAY
   SSLG CO-ADVISER
   20 LETTER WEBSITE
========================================== */


/* ==========================================
   SSLG POSITIONS
========================================== */

const positions = [

    "President",

    "Vice President",

    "Secretary",

    "Treasurer",

    "Auditor",

    "P.I.O.",

    "Grade 11 Chairperson",

    "Grade 11 Protocol Officer",

    "Grade 12 Chairperson",

    "Grade 12 Protocol Officer"

];


/* ==========================================
   20 LETTERS
========================================== */

const letters = [

    /* ======================================
       LETTER 01
    ====================================== */

    {

        id: 1,

        position: "President",

        title:
            "A Letter of Gratitude",

        clue:
            "Think about the person who leads the SSLG.",

        question:
            "What is the highest student leadership position in the SSLG?",

        answer:
            "president",

        image:
            "assets/letter1.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                As the President, I want to thank you
                for being one of the people who guides
                and supports our organization.
            </p>

            <p>
                Your patience, advice, and trust have
                helped us become better student leaders.
                We are grateful for every opportunity
                you give us to learn and serve.
            </p>

            <p>
                Thank you for believing in the SSLG
                and in all of us.
            </p>

        `,

        signature:
            "With deepest gratitude,<br>SSLG President"

    },


    /* ======================================
       LETTER 02
    ====================================== */

    {

        id: 2,

        position: "Vice President",

        title:
            "Thank You for Guiding Us",

        clue:
            "Think of the person who works closely with the President.",

        question:
            "What position comes directly after the President?",

        answer:
            "vice president",

        image:
            "assets/letter2.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for always being there whenever
                we need advice or a little encouragement.
            </p>

            <p>
                Your guidance reminds us that leadership
                is not only about leading others, but also
                about learning how to listen, understand,
                and serve.
            </p>

            <p>
                We truly appreciate everything you do
                for our SSLG family.
            </p>

        `,

        signature:
            "With appreciation,<br>SSLG Vice President"

    },


    /* ======================================
       LETTER 03
    ====================================== */

    {

        id: 3,

        position: "Secretary",

        title:
            "For Every Reminder",

        clue:
            "This SSLG position is responsible for records and documentation.",

        question:
            "Which SSLG position usually handles official records and documentation?",

        answer:
            "secretary",

        image:
            "assets/letter3.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for patiently guiding us through
                meetings, documents, announcements, and
                all the little details that make our work
                possible.
            </p>

            <p>
                Your reminders and advice have helped us
                stay organized and responsible.
            </p>

            <p>
                We are grateful for your support.
            </p>

        `,

        signature:
            "With sincere thanks,<br>SSLG Secretary"

    },


    /* ======================================
       LETTER 04
    ====================================== */

    {

        id: 4,

        position: "Treasurer",

        title:
            "For Your Trust",

        clue:
            "This position is connected with the organization's finances.",

        question:
            "Which SSLG position is responsible for managing the organization's funds?",

        answer:
            "treasurer",

        image:
            "assets/letter4.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for teaching us the importance
                of responsibility and accountability.
            </p>

            <p>
                Your guidance helps us understand that
                even the smallest responsibilities should
                be handled with honesty and care.
            </p>

            <p>
                Thank you for trusting us and helping us
                become responsible student leaders.
            </p>

        `,

        signature:
            "With gratitude,<br>SSLG Treasurer"

    },


    /* ======================================
       LETTER 05
    ====================================== */

    {

        id: 5,

        position: "Auditor",

        title:
            "For Keeping Us Accountable",

        clue:
            "Think of the position that checks financial records.",

        question:
            "Which SSLG position checks and reviews financial records?",

        answer:
            "auditor",

        image:
            "assets/letter5.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for teaching us that leadership
                requires honesty, transparency, and
                accountability.
            </p>

            <p>
                Your guidance encourages us to always
                do what is right and to take every
                responsibility seriously.
            </p>

            <p>
                We appreciate your patience and trust.
            </p>

        `,

        signature:
            "With appreciation,<br>SSLG Auditor"

    },


    /* ======================================
       LETTER 06
    ====================================== */

    {

        id: 6,

        position: "P.I.O.",

        title:
            "For Helping Us Communicate",

        clue:
            "This position is responsible for information and publicity.",

        question:
            "What does P.I.O. stand for?",

        answer:
            "public information officer",

        image:
            "assets/letter6.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for helping us communicate
                our ideas, projects, and announcements
                to the student body.
            </p>

            <p>
                Your guidance reminds us that good
                communication is an important part
                of good leadership.
            </p>

            <p>
                Thank you for always supporting our ideas.
            </p>

        `,

        signature:
            "With appreciation,<br>SSLG P.I.O."

    },


    /* ======================================
       LETTER 07
    ====================================== */

    {

        id: 7,

        position: "Grade 11 Chairperson",

        title:
            "For Representing Us",

        clue:
            "This position represents students from a particular grade level.",

        question:
            "Which SSLG position represents Grade 11 students?",

        answer:
            "grade 11 chairperson",

        image:
            "assets/letter7.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for guiding us as we learn
                how to represent our fellow students.
            </p>

            <p>
                Your advice has helped us understand
                that being a leader means listening
                to others and making sure their voices
                are heard.
            </p>

            <p>
                We are grateful for everything you do.
            </p>

        `,

        signature:
            "With gratitude,<br>Grade 11 Chairperson"

    },


    /* ======================================
       LETTER 08
    ====================================== */

    {

        id: 8,

        position: "Grade 11 Protocol Officer",

        title:
            "For Every Event",

        clue:
            "This position helps maintain proper procedures during events.",

        question:
            "Which SSLG position is responsible for protocol in Grade 11?",

        answer:
            "grade 11 protocol officer",

        image:
            "assets/letter8.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for helping us understand
                the importance of preparation, discipline,
                and proper conduct during school events.
            </p>

            <p>
                Your guidance helps us become more
                confident and responsible representatives.
            </p>

            <p>
                Thank you for always being there.
            </p>

        `,

        signature:
            "With thanks,<br>Grade 11 Protocol Officer"

    },


    /* ======================================
       LETTER 09
    ====================================== */

    {

        id: 9,

        position: "Grade 12 Chairperson",

        title:
            "For Your Encouragement",

        clue:
            "This position represents students from Grade 12.",

        question:
            "Which SSLG position represents Grade 12 students?",

        answer:
            "grade 12 chairperson",

        image:
            "assets/letter9.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                As we approach another important chapter
                of our student journey, your encouragement
                means a lot to us.
            </p>

            <p>
                Thank you for reminding us to keep learning,
                serving, and making meaningful memories.
            </p>

            <p>
                We will always be grateful for your guidance.
            </p>

        `,

        signature:
            "With appreciation,<br>Grade 12 Chairperson"

    },


    /* ======================================
       LETTER 10
    ====================================== */

    {

        id: 10,

        position: "Grade 12 Protocol Officer",

        title:
            "For Every Opportunity",

        clue:
            "This position handles protocol for Grade 12.",

        question:
            "Which SSLG position handles protocol for Grade 12?",

        answer:
            "grade 12 protocol officer",

        image:
            "assets/letter10.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for giving us opportunities
                to participate, lead, and grow.
            </p>

            <p>
                Every event and activity becomes a chance
                for us to learn something new.
            </p>

            <p>
                Thank you for guiding us throughout
                our journey.
            </p>

        `,

        signature:
            "With gratitude,<br>Grade 12 Protocol Officer"

    },


    /* ======================================
       LETTER 11
    ====================================== */

    {

        id: 11,

        position: "President",

        title:
            "A Second Thank You",

        clue:
            "Think about the person responsible for leading the SSLG.",

        question:
            "Who leads the SSLG?",

        answer:
            "president",

        image:
            "assets/letter11.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                One letter could never be enough to
                express our appreciation.
            </p>

            <p>
                Thank you for every meeting, every
                reminder, every suggestion, and every
                moment when you chose to support us.
            </p>

            <p>
                Your guidance will remain one of the
                most meaningful parts of our leadership
                experience.
            </p>

        `,

        signature:
            "Always grateful,<br>SSLG President"

    },


    /* ======================================
       LETTER 12
    ====================================== */

    {

        id: 12,

        position: "Vice President",

        title:
            "For Believing in Us",

        clue:
            "This position assists the President.",

        question:
            "Which position assists the President?",

        answer:
            "vice president",

        image:
            "assets/letter12.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for believing that we can
                accomplish things even when we sometimes
                doubt ourselves.
            </p>

            <p>
                Your confidence in us gives us another
                reason to keep trying.
            </p>

            <p>
                Thank you for helping us become better
                leaders and better people.
            </p>

        `,

        signature:
            "With heartfelt thanks,<br>SSLG Vice President"

    },


    /* ======================================
       LETTER 13
    ====================================== */

    {

        id: 13,

        position: "Secretary",

        title:
            "For Every Little Detail",

        clue:
            "This officer works with documentation.",

        question:
            "Who is responsible for keeping official SSLG records?",

        answer:
            "secretary",

        image:
            "assets/letter13.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Behind every successful activity are
                countless little details.
            </p>

            <p>
                Thank you for helping us notice those
                details and reminding us that preparation
                is just as important as execution.
            </p>

            <p>
                We truly appreciate your guidance.
            </p>

        `,

        signature:
            "With sincere appreciation,<br>SSLG Secretary"

    },


    /* ======================================
       LETTER 14
    ====================================== */

    {

        id: 14,

        position: "Treasurer",

        title:
            "For Teaching Responsibility",

        clue:
            "This officer manages the organization's money.",

        question:
            "Who manages the SSLG funds?",

        answer:
            "treasurer",

        image:
            "assets/letter14.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Leadership has taught us that trust
                comes with responsibility.
            </p>

            <p>
                Thank you for helping us understand
                how important it is to be responsible
                with everything entrusted to us.
            </p>

            <p>
                Your guidance is deeply appreciated.
            </p>

        `,

        signature:
            "Thank you,<br>SSLG Treasurer"

    },


    /* ======================================
       LETTER 15
    ====================================== */

    {

        id: 15,

        position: "Auditor",

        title:
            "For Your Honesty",

        clue:
            "This officer reviews financial matters.",

        question:
            "Which officer reviews financial records?",

        answer:
            "auditor",

        image:
            "assets/letter15.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for teaching us that integrity
                should always be part of leadership.
            </p>

            <p>
                Your example reminds us to remain honest,
                fair, and accountable in everything we do.
            </p>

            <p>
                Thank you for being one of the people
                who helps keep us on the right path.
            </p>

        `,

        signature:
            "With respect,<br>SSLG Auditor"

    },


    /* ======================================
       LETTER 16
    ====================================== */

    {

        id: 16,

        position: "P.I.O.",

        title:
            "For Every Announcement",

        clue:
            "P.I.O. is an abbreviation related to public information.",

        question:
            "What position handles public information?",

        answer:
            "public information officer",

        image:
            "assets/letter16.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for helping us turn ideas
                into meaningful projects and announcements.
            </p>

            <p>
                Your suggestions have helped us
                communicate more clearly and serve
                our fellow students better.
            </p>

            <p>
                We appreciate your support more than
                words can say.
            </p>

        `,

        signature:
            "With appreciation,<br>SSLG P.I.O."

    },


    /* ======================================
       LETTER 17
    ====================================== */

    {

        id: 17,

        position: "Grade 11 Chairperson",

        title:
            "For Listening",

        clue:
            "This position represents the Grade 11 student body.",

        question:
            "Who represents Grade 11 in the SSLG?",

        answer:
            "grade 11 chairperson",

        image:
            "assets/letter17.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for listening to our ideas,
                concerns, and even the small things
                we sometimes hesitate to share.
            </p>

            <p>
                Having someone who listens makes
                leadership feel much less overwhelming.
            </p>

            <p>
                Thank you for being that person.
            </p>

        `,

        signature:
            "With gratitude,<br>Grade 11 Chairperson"

    },


    /* ======================================
       LETTER 18
    ====================================== */

    {

        id: 18,

        position: "Grade 11 Protocol Officer",

        title:
            "For Your Guidance",

        clue:
            "Think of the officer responsible for Grade 11 protocol.",

        question:
            "Who handles protocol for Grade 11?",

        answer:
            "grade 11 protocol officer",

        image:
            "assets/letter18.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Thank you for every reminder that helped
                us prepare for school activities.
            </p>

            <p>
                Your guidance has taught us that being
                prepared and respectful can make a huge
                difference.
            </p>

            <p>
                Thank you for helping us grow.
            </p>

        `,

        signature:
            "With appreciation,<br>Grade 11 Protocol Officer"

    },


    /* ======================================
       LETTER 19
    ====================================== */

    {

        id: 19,

        position: "Grade 12 Chairperson",

        title:
            "A Memory to Keep",

        clue:
            "This position represents Grade 12.",

        question:
            "Who represents Grade 12 in the SSLG?",

        answer:
            "grade 12 chairperson",

        image:
            "assets/letter19.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                As we continue our journey through
                senior high school, we know that many
                of the moments we share now will become
                memories we carry with us.
            </p>

            <p>
                Thank you for being part of those memories
                and for making our leadership experience
                more meaningful.
            </p>

        `,

        signature:
            "With heartfelt thanks,<br>Grade 12 Chairperson"

    },


    /* ======================================
       LETTER 20
    ====================================== */

    {

        id: 20,

        position: "Grade 12 Protocol Officer",

        title:
            "Happy Teacher's Day",

        clue:
            "Think about the celebration dedicated to appreciating teachers.",

        question:
            "What special celebration are we celebrating?",

        answer:
            "teacher's day",

        image:
            "assets/letter20.jpg",

        body: `

            <p>
                Dear Co-Adviser,
            </p>

            <p>
                Happy Teacher's Day!
            </p>

            <p>
                Twenty letters may seem like a lot,
                but even twenty letters are not enough
                to express how grateful we are for
                everything you do.
            </p>

            <p>
                Thank you for guiding us, supporting us,
                correcting us when necessary, and
                believing in us as student leaders.
            </p>

            <p>
                We hope this little collection reminds
                you that your efforts are seen,
                appreciated, and remembered.
            </p>

        `,

        signature:
            "With all our appreciation,<br>Grade 12 Protocol Officer"

    }

];


/* ==========================================
   GET ELEMENTS
========================================== */

const letterGrid =
    document.getElementById(
        "letterGrid"
    );


const modal =
    document.getElementById(
        "letterModal"
    );


const modalBody =
    document.getElementById(
        "modalBody"
    );


/* ==========================================
   CREATE ALL 20 CARDS
========================================== */

letters.forEach(
    function(letter) {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "letter-card";


        card.dataset.letter =
            letter.id;


        card.innerHTML = `

            <div class="lock-icon">
                💌
            </div>


            <div class="letter-number">

                LETTER
                ${String(letter.id).padStart(2, "0")}

            </div>


            <h2>

                ${letter.title}

            </h2>


            <div class="from-label">

                FROM

                <strong>

                    ${letter.position}

                </strong>

            </div>


            <p>

                A message is waiting inside...

            </p>


            <button
                class="open-button"
                onclick="openLetter(${letter.id})"
            >

                OPEN LETTER

            </button>

        `;


        letterGrid.appendChild(
            card
        );

    }
);


/* ==========================================
   OPEN LETTER
========================================== */

function openLetter(id) {

    const letter =
        letters.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!letter) {

        return;

    }


    showQuestion(
        letter
    );


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   SHOW QUESTION
========================================== */

function showQuestion(
    letter
) {

    modalBody.innerHTML = `

        <span class="question-label">

            LETTER
            ${String(letter.id).padStart(2, "0")}
            • LOCKED

        </span>


        <h2 class="question-title">

            ${letter.title}

        </h2>


        <div class="from-person">

            FROM
            ${letter.position}

        </div>


        <div class="clue-box">

            <strong>
                ✦ CLUE
            </strong>

            <br><br>

            ${letter.clue}

        </div>


        <p class="question-text">

            ${letter.question}

        </p>


        <input
            type="text"
            id="answerInput"
            class="password-input"
            placeholder="Type your answer..."
            autocomplete="off"
        >


        <button
            class="unlock-button"
            onclick="checkAnswer(${letter.id})"
        >

            UNLOCK LETTER

        </button>


        <div
            class="wrong-answer"
            id="wrongAnswer"
        ></div>

    `;


    const input =
        document.getElementById(
            "answerInput"
        );


    input.focus();


    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                checkAnswer(
                    letter.id
                );

            }

        }
    );

}


/* ==========================================
   CHECK ANSWER
========================================== */

function checkAnswer(id) {

    const letter =
        letters.find(
            function(item) {

                return item.id === id;

            }
        );


    const input =
        document.getElementById(
            "answerInput"
        );


    const error =
        document.getElementById(
            "wrongAnswer"
        );


    if (
        !letter ||
        !input
    ) {

        return;

    }


    const userAnswer =
        input.value
            .trim()
            .toLowerCase();


    const correctAnswer =
        letter.answer
            .trim()
            .toLowerCase();


    if (
        userAnswer ===
        correctAnswer
    ) {

        unlockCard(
            id
        );


        showOpenedLetter(
            letter
        );

        return;

    }


    error.textContent =
        "✕ That isn't quite right. Try again!";


    input.classList.remove(
        "shake"
    );


    void input.offsetWidth;


    input.classList.add(
        "shake"
    );


    input.value = "";

    input.focus();

}


/* ==========================================
   UNLOCK CARD
========================================== */

function unlockCard(
    id
) {

    const card =
        document.querySelector(
            `.letter-card[data-letter="${id}"]`
        );


    if (!card) {

        return;

    }


    card.classList.add(
        "unlocked"
    );


    const icon =
        card.querySelector(
            ".lock-icon"
        );


    if (icon) {

        icon.textContent =
            "💖";

    }

}


/* ==========================================
   SHOW OPENED LETTER
========================================== */

function showOpenedLetter(
    letter
) {

    modalBody.innerHTML = `

        <span class="open-letter-label">

            LETTER
            ${String(letter.id).padStart(2, "0")}
            • UNLOCKED

        </span>


        <h2 class="letter-title">

            ${letter.title}

        </h2>


        <div class="from-person">

            FROM
            ${letter.position}

        </div>


        <img
            src="${letter.image}"
            alt="${letter.title}"
            class="letter-photo"
            onerror="this.classList.add('image-missing')"
        >


        <div class="letter-body">

            ${letter.body}

        </div>


        <div class="signature">

            ${letter.signature}

        </div>

    `;

}


/* ==========================================
   CLOSE MODAL
========================================== */

function closeModal() {

    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);
