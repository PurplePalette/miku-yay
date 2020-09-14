export class Note {
    type: number
    time: number
    lane: number
    size: number
    id: number

    constructor(time: number, type: number, lane: number, size: number, id: number) {
        
        this.type = (type => {
            switch (type) {
                case 1:
                    return 2
                case 5:
                    return 4
                case 7:
                    return 3
                case 8:
                    return 6
                case 9:
                    return 5
                case 11:
                    return 5
                case 10:
                    return 7
                default: 
                    return 0
                }
        })(type)
        this.time = time
        this.lane = lane - 8
        this.size = size - 1
        this.id = id
    }
}