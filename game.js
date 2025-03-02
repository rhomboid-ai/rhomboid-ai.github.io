document.addEventListener("DOMContentLoaded", function () {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: "arcade",
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let game = new Phaser.Game(config);
    let bat, ball, score = 0, scoreText, wickets = 0, wicketsText, overs = 0, overBalls = 0;
    let stadium;
    let gameOver = false;

    function preload() {
        this.load.image("stadium", "stadium.jpg"); // Background stadium
        this.load.image("bat", "bat.jpg");  // Load local bat image
        this.load.image("ball", "ball.jpg"); // Load local ball image
    }

    function create() {
        // Add stadium background
        stadium = this.add.image(400, 300, "stadium").setScale(1.4);

        bat = this.physics.add.sprite(400, 550, "bat").setScale(0.3).setImmovable(true);
        bat.body.allowGravity = false;

        ball = this.physics.add.sprite(Phaser.Math.Between(100, 700), 100, "ball").setScale(0.1);
        ball.setCollideWorldBounds(true);
        ball.setBounce(0.6);
        ball.setVelocity(Phaser.Math.Between(-150, 150), 300);

        this.physics.add.collider(ball, bat, hitBall, null, this);

        scoreText = this.add.text(16, 16, "Score: 0", { fontSize: "24px", fill: "#fff" });
        wicketsText = this.add.text(16, 50, "Wickets: 0", { fontSize: "24px", fill: "#fff" });
        oversText = this.add.text(16, 84, "Overs: 0.0", { fontSize: "24px", fill: "#fff" });

        this.input.on("pointermove", function (pointer) {
            bat.x = pointer.x;
        });
    }

    function update() {
        if (gameOver) return;

        if (ball.y > 600) {
            loseWicket();
        }
    }

    function hitBall(ball, bat) {
        let shotPower = Phaser.Math.Between(1, 3); // 1: Defensive, 2: Normal, 3: Power shot
        let angle = Phaser.Math.Between(-15, 15);
        
        if (shotPower === 1) {
            ball.setVelocityY(-300);
            ball.setVelocityX(Phaser.Math.Between(-100, 100));
        } else if (shotPower === 2) {
            ball.setVelocityY(-500);
            ball.setVelocityX(Phaser.Math.Between(-150, 150));
        } else {
            ball.setVelocityY(-700);
            ball.setVelocityX(Phaser.Math.Between(-200, 200));
        }

        ball.setRotation(angle * Phaser.Math.DEG_TO_RAD);
        
        let runs = shotPower === 1 ? 1 : Phaser.Math.Between(4, 6);
        score += runs;
        scoreText.setText("Score: " + score);
        updateOver();
    }

    function loseWicket() {
        wickets++;
        wicketsText.setText("Wickets: " + wickets);
        if (wickets >= 10) {
            gameOver = true;
            this.add.text(300, 250, "Game Over!", { fontSize: "48px", fill: "#ff0000" });
        } else {
            resetBall();
        }
    }

    function resetBall() {
        ball.setPosition(Phaser.Math.Between(100, 700), 100);
        ball.setVelocity(Phaser.Math.Between(-150, 150), 300);
    }

    function updateOver() {
        overBalls++;
        if (overBalls >= 6) {
            overs++;
            overBalls = 0;
        }
        oversText.setText("Overs: " + overs + "." + overBalls);
    }
});