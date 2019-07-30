import { listor } from '../src'

describe('listor', () => {
	it('returns a list of items with a comma, and oxford comma, and the English conjunction "and"', () => {
		expect(listor([1, 1, 'java'])).toEqual('1, 1, and java')
	})
	it('returns a list of items with a comma, and oxford comma, and the English conjunction "and"', () => {
		expect(listor([true, 1, 'java', 'script'])).toEqual(
			'true, 1, java, and script'
		)
	})
	it('returns a list of items with a comma, and no oxford comma, and the English conjunction "and"', () => {
		expect(listor([true, 1, 'java', 'script'], false)).toEqual(
			'true, 1, java and script'
		)
	})
	it('returns an item', () => {
		expect(listor(['java'])).toEqual('java')
	})
	it('returns two items with the English conjunction "and"', () => {
		expect(listor(['java', 'script'])).toEqual('java and script')
	})
	it('returns a list of items items with "+" instead of a comma and the English conjunction "and"', () => {
		expect(listor(['java', 'script', 'language'], true, '+')).toEqual('java+ script+ and language')
	})
	it('returns a list of items items with "+" instead of a comma and the French conjunction "et"', () => {
		expect(listor(['java', 'script', 'language'], true, '+', 'et')).toEqual('java+ script+ et language')
	})
	it('returns an Arabic item list', () => {
		expect(listor(['جافا', 'سكريبت', 'جافا'], true, '،', 'و')).toEqual('جافا، سكريبت، و جافا')
	})
})
