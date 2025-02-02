const ERROR_PREFIX="[ERROR] ";
const MIN_CAR_NAME_LENGTH=5;
const MIN_RANDOM_VALUE=4;
const WINNER_MESSAGE="최종 우승자";
const RESULT_MESSAGE="\n실행결과"

const INPUT_MESSAGES={
    CAR_NAME_MESSAGE:"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    ATTEMPT_COUNT_MESSAGE:"시도할 횟수는 몇 회인가요?\n"
}

const ERROR_MESSAGES={
    CAR_NAME_LENGTH: ERROR_PREFIX+`자동차의 이름은 ${MIN_CAR_NAME_LENGTH}자 이하만 가능합니다.`,
    INVALID_ATTEMPT_COUNT: ERROR_PREFIX+"시도 횟수는 양의 정수여야 합니다.",
    EMPTY_CAR_NAMES:ERROR_PREFIX+"자동차의 이름을 입력해주세요.",
    DUPLICATE_CAR_NAMES:ERROR_PREFIX+"자동차의 이름은 중복될 수 없습니다."
}

export {MIN_CAR_NAME_LENGTH, INPUT_MESSAGES, ERROR_MESSAGES, RESULT_MESSAGE, WINNER_MESSAGE, MIN_RANDOM_VALUE}