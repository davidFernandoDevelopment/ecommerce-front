import { Subject } from 'rxjs';

export class SubjectManager {
	private _subject = new Subject();

	getSubject() {
		return this._subject.asObservable();
	}

	setSubject(v: any) {
		this._subject.next(v);
	}
}
