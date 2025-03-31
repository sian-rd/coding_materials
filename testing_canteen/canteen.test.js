describe('canteen', () => {

    let menu;
    let student1;
    let student2;

    beforeEach(() => {
        menu = {
            a1: {
                category: 'food',
                type: 'sausages',
                price: 3 
            },
            a2: {
                category: 'drink',
                type: 'water',
                price: 0
            },
            a3: {
                category: 'food',
                type: 'soup',
                price: 1
            },
            a4: {
                category: 'food',
                type: 'quiche',
                price: 3
            }, 
            a5: {
                category: 'food',
                type: 'pizza',
                price: 2
            },
            a6: {
                category: 'drink',
                type: 'lemonade',
                price: 0.5
            },
            a7: {
                category: 'food',
                type: 'salad',
                price: 0.5
            },
            a8: {
                category: 'food',
                type: 'chips',
                price: 0.5
            },
            a9: {
                category: 'drink',
                water: 'squash',
                price: 0.25
            },   
            a10: {
                category: 'drink',
                type: 'tea',
                price: 0.5
            },
            a11: {
                category: 'drink',
                type: 'water',
                price: 0
            }
        }       
        
        student1 = {
            firstName: 'jim',
            basket: ['a3', 'a8', 'a4', 'a10'],
            wallet: 3
        }
        
        student2 = {
            firstName: 'rita',
            basket: ['a1', 'a7', 'a11'],
            wallet: 5
        }
    })

    describe('menu', () => {

        it('should return an array of the types of all the items', () => {
            const itemTypes = ['sausages', 'water', 'soup', 'quiche', 'pizza', 'lemonade', 'salad', 'chips', 'squash', 'tea', 'water']
            const result = getTypes(menu)

            expect(result).toStrictEquals(itemTypes)
        })
        
        it('should return an array of all the items with the category "drink"', () => {
            const drinks = [menu.a2, menu.a6, menu.a9, menu.a10, menu.a11]
            const result = getDrinks(menu)

            expect(result).toStrictEquals(drinks)
        })

        it('should return an array of all the items with the category "food"', () => {
            
        })

        it('should return the number of items with the category "drink"', () => {
            const numberOfDrinks = 5
            const result = numberOfDrinks(menu)

            expect(result).toStrictEquals(numberOfDrinks)
        })

        it('should return the nummber of items with the category "food"', () => {

        })

    })

    describe('students', () => {

        it('should return the total basket price for a given student', () => {
            const total = 5
            const result = totalBasketPrice(student1)

            expect(result).toBe(total)
        })

        it('should return true if a given student can afford the items in their basket', () => {
            const result = canAffordBasket(student1)

            expect(result).toBe(true)
        })

        it('should return false is a given student cannot afford the items in their basket', () => {

        })

    })

})