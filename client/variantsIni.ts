export const variantsIni = `
# Lose at anti-chess win at anti-antichess.
[anti_antichess:giveaway]
extinctionValue = loss
stalemateValue = loss
castling = false

# Hybrid of antichess and atomic. Antichess is the base variant.
[antiatomic:giveaway]
blastOnCapture = true
castling = false
extinctionOpponentPieceCount = 1

# Hybrid of antichess and zh. Antichess is the base variant.
[antihouse:giveaway]
pieceDrops = true
capturesToHand = true
pocketSize = 6
castling = false

# antichess with a pawn structure following horde rules.
[antipawns:horde]
king = -
commoner = k
startFen = pppppppp/pppppppp/pppppppp/8/8/PPPPPPPP/PPPPPPPP/PPPPPPPP w - - 0 1
promotionPieceTypes = nbrqk
stalemateValue = win
extinctionValue = win
mustCapture = true
extinctionPieceTypes = *
extinctionPseudoRoyal = false
castling = false

# Hybrid of 3 check and antichess. 3 check is the base variant.
[coffee_3check:3check]
startFen = rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 3+3 0 1
checkCounting = true
mustCapture = true

# Hybrid of rk and antichess. RK is the base variant.
[coffeerace:racingkings]
mustCapture = true

# Hybrid of antichess and zh. ZH is th base variant.
[coffeehouse:crazyhouse]
mustCapture = true

# Hybrid variant of antichess and koth. KOTH is the base variant.
[coffeehill:kingofthehill]
mustCapture = true

# Hybrid of antichess and placement. Antichess is the base variant.
[antiplacement:placement]
king = -
commoner = k
promotionPieceTypes = nbrqk
mustCapture = true
stalemateValue = win
extinctionValue = win
extinctionPieceTypes = *
extinctionPseudoRoyal = false
castling = false

# Hybrid variant of antichess, atomic and king of the hill!
[atomic_giveaway_hill:giveaway]
blastOnCapture = true
flagPiece = k
whiteFlag = d4 e4 d5 e5
blackFlag = d4 e4 d5 e5
castling = false`
