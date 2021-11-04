import React, {useEffect, useState} from 'react';
import styles from './OrderAdd.module.scss';
import {Radiobutton} from '../../../components/ui/Radiobutton/Radiobutton';
import {setStep} from '../../../redux/actions/order';
import {useDispatch} from 'react-redux';
import {Checkbox} from '../../../components/ui/Checkbox/Checkbox';

export const OrderAdd = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState();
    const [typeStart, setTypeStart] = useState('text');
    const [typeFinish, setTypeFinish] = useState('text');
    const [dateStart, setDateStart] = useState();
    const [dateStartStr, setDateStartStr] = useState();
    const [dateFinish, setDateFinish] = useState();
    const [dateFinishStr, setDateFinishStr] = useState();

    useEffect(() => {
        dispatch(setStep(3));
    }, []);

    useEffect(() => {
        if (dateStart) {
            const day = dateStart.slice(8, 10);
            const month = dateStart.slice(5, 7);
            const year = dateStart.slice(0, 4);
            const time = dateStart.slice(11)
            const dateStr = day + '.' + month + '.' + year + ' ' + time;
            setDateStartStr(dateStr);
        }
    }, [dateStart]);

    useEffect(() => {
        if (dateFinish) {
            const day = dateFinish.slice(8, 10);
            const month = dateFinish.slice(5, 7);
            const year = dateFinish.slice(0, 4);
            const time = dateFinish.slice(11)
            const dateStr = day + '.' + month + '.' + year + ' ' + time;
            setDateFinishStr(dateStr);
        }
    }, [dateFinish]);

    const setDateS = (e) => {
        setDateStart(e.target.value.toLocaleString());
    }

    const setDateF = (e) => {
        setDateFinish(e.target.value.toLocaleString());
    }

    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className={styles.add}>
            <div className={styles.add__point}>
                <div className={styles.property}>Цвет</div>
                <div className={styles.radiobuttons}>
                    <Radiobutton id="any" value="Любой" name="color" handleChange={handleChangeColor}/>
                    <Radiobutton id="red" value="Красный" name="color" handleChange={handleChangeColor}/>
                    <Radiobutton id="blue" value="Голубой" name="color" handleChange={handleChangeColor}/>
                </div>
            </div>
            <div className={styles.add__point}>
                <div className={styles.property}>Дата аренды</div>
                <div className={styles.date}>
                    <div className={styles.date__start}>
                        <span>С </span><input type={typeStart}
                                              value={typeStart === 'datetime-local' ? dateStart : dateStartStr}
                                              onInput={setDateS}
                                              onFocus={() => setTypeStart('datetime-local')}
                                              onBlur={() => setTypeStart('text')}
                                              placeholder="Введите дату и время"/>
                    </div>
                    <div className={styles.date__finish}>
                        <span>По </span><input type={typeFinish}
                                               value={typeFinish === 'datetime-local' ? dateFinish : dateFinishStr}
                                               onInput={setDateF}
                                               onFocus={() => setTypeFinish('datetime-local')}
                                               onBlur={() => setTypeFinish('text')}
                                               placeholder="Введите дату и время"/>
                    </div>
                </div>
            </div>
            <div className={styles.add__point}>
                <div className={styles.property}>Тариф</div>
                <div className={styles.rate}>
                    <Radiobutton className={styles.rate} id="minute" value="Поминутно, 7₽/мин" name="rate"
                                 handleChange={handleChangeColor}/></div>
                <div className={styles.rate}>
                    <Radiobutton id="day" value="На сутки, 1999 ₽/сутки" name="rate"
                                 handleChange={handleChangeColor}/></div>
            </div>
            <div className={styles.add__point}>
                <div className={styles.property}>Доп услуги</div>
                <div>
                    <div><Checkbox text="Полный бак, 500р" name="full"/></div>
                    <div><Checkbox text="Детское кресло, 200р" name="child"/></div>
                    <div><Checkbox text="Правый руль, 1600р" name="right"/></div>
                </div>
            </div>
        </div>)
}