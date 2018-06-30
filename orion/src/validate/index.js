export const required = value => value ? undefined : 'Заполните поле'
export const phone = value => value && isNaN(Number(value)) ? 'В поле должны присутствовать только числа' : undefined
