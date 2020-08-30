function bullshit_generator(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const jobs = {
    engineer: '工程師',
    entrepreneur: '創業家',
    designer: '設計師'
  }

  const target = option.target
  let bullshit = ''

  //處理錯誤
  if (!target) {
    return '請選擇一個對象'
  }

  //選擇該類別的隨機task
  const randomTask = randomDryTalk(task[target])

  //選擇隨機的phrase
  const randomPhrase = randomDryTalk(phrase)

  //回傳結果
  return bullshit += `身為一個${jobs[target]} ${randomTask} ${randomPhrase}吧!!`
}

function randomDryTalk(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

//export function for other files to use
module.exports = bullshit_generator