export const inputCaption = (name) => {
  switch (name) {
    case 'city':
      return 'Город'
    case 'name':
      return 'ФИО'
    case 'address':
      return 'Адрес'
    case 'reasonCall':
      return 'Причина звонка'
    case 'comment':
      return 'Комментарий'
    case 'phone':
      return 'Контактный номер телефона'
    case 'service':
      return 'Подключаемая услуга'
    default:
      return 'Неизвестное поле'
  }
}
