// -----------------сколько краски уходит на всю комнату--------------- 1 бидон краски=1кв м
// длина комнаты 4-----ширина комнаты 3-----высота комнаты 5-----размер окна 2--- количество окон рандом

class Room {
	constructor (roomLength, roomWidth, roomHeight, windowSize, windowNumb) {
		this.roomLength = roomLength;
		this.roomWidth = roomWidth;
		this.roomHeight = roomHeight;
		this.windowSize = windowSize;
		this.windowNumb = windowNumb;
	}

	calcRoomSize() {
		return `${2*((this.roomLength+this.roomWidth)*2)+(this.roomWidth*this.roomLength)-(this.windowSize*this.windowNumb)} litr kraska`
	}
}

const roomsize = new Room (4, 3, 5, 2, 2);
console.log(roomsize.calcRoomSize());

//  (площадь стен)-->(2*(периметр комнаты))+(площадь пола)-(площадь окна*количество окон)=количество краски которое уйдет на покраску всей комнаты исключая потолок и окна